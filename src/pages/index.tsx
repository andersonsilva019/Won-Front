import { GetStaticProps } from 'next'
import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from '../../lib/apolloClient'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    revalidate: 60, // In seconds
    props: {
      banners: bannerMapper(banners),

      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),

      freeGamesTitle: sections?.freeGames?.title,
      freeHighligth: highlightMapper(sections?.freeGames?.highlight),
      freeGames: gamesMapper(freeGames),

      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),

      upcommingGamesTitle: sections?.upcomingGames?.title,
      upcommingHighligth: highlightMapper(sections?.upcomingGames?.highlight),
      upcommingGames: gamesMapper(upcomingGames)
    }
  }
}
