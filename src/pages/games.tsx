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

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const games = data.games.map(game => {
    return {
      slug: game.slug,
      title: game.name,
      developer: game.developers[0].name,
      img: `http://localhost:1337${game.cover!.url}`,
      price: game.price
    }
  })

  return {
    props: {
      games,
      filterItems: itemsMock
    },
    revalidate: 60
  }
}
