import { GetStaticProps } from 'next'
import Games, { GamesTemplateProps } from 'templates/Games'

import { QUERY_GAMES } from 'graphql/queries/games'
import itemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from '../../lib/apolloClient'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
export default function GamesPage(props: GamesTemplateProps) {
  return <Games {...props} />
}

export const getStaticProps: GetStaticProps<GamesTemplateProps> = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 15 }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems: itemsMock
    },
    revalidate: 60
  }
}
