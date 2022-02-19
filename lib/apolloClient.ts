import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  NormalizedCacheObject
} from '@apollo/client'
import apolloCache from 'utils/apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql' // Server URL (must be absolute)
    }),
    cache: apolloCache
  })
}

export function initializeApollo(initialState = {}) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  if (typeof window === 'undefined') return _apolloClient

  apolloClient = apolloClient ?? _apolloClient

  return apolloClient
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
