import { useMemo } from 'react'
import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import apolloCache from 'utils/apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient() {
  return new ApolloClient({
    // connectToDevTools: true,
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql' // Server URL (must be absolute)
    }),
    cache: apolloCache
  })
}

export function initializeApollo(initialState = null) {
  // serve para verificar se já existe uma instância, para não criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  // se a página usar o apolloClient no lado client
  // hidratamos o estado inicial aqui
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }
  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal
  // cria o apolloClient se estiver no client side
  apolloClient = apolloClient ?? apolloClientGlobal
  return apolloClient
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
