import { GlobalStyles } from 'styles/GlobalStyles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../../lib/apolloClient'
export default function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

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
