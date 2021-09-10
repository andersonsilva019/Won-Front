import { GetStaticProps } from 'next'
import Games, { GamesTemplateProps } from 'templates/Games'

import { QUERY_GAMES } from 'graphql/queries/games'
import itemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from '../../lib/apolloClient'
import {
  QueryGamesResponse,
  QueryGamesVariables
} from 'graphql/types/QueryGames'

export default function GamesPage(props: GamesTemplateProps) {
  return <Games {...props} />
}

export const getStaticProps: GetStaticProps<GamesTemplateProps> = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    QueryGamesResponse,
    QueryGamesVariables
  >({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const games = data.games.map(game => {
    /* eslint-disable-next-line */
    const price = game.price === 0 ? 'FREE' : new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(game.price)

    return {
      title: game.name,
      developer: game.developers[0].name,
      img: `http://localhost:1337${game.cover!.url}`,
      price
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
