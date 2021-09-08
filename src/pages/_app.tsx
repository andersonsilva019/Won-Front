import { GlobalStyles } from 'styles/GlobalStyles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Head>
          <title>Won Games</title>
          <link rel="shortcut icon" href="/images/icon-512.png" />
          <link rel="apple-touch-icon" href="/images/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="The best games stores in the world!"
          />
        </Head>

        <GlobalStyles />
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  )
}
