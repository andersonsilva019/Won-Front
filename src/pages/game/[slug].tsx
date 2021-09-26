import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { initializeApollo } from '../../../lib/apolloClient'

import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import {
  QueryGamesBySlug,
  QueryGamesBySlugVariables
} from 'graphql/generated/QueryGamesBySlug'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Game, { GameTemplateProps } from 'templates/Game'
import { Platform, Rating } from 'components/GameDetails'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return <Game {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => {
    return { params: { slug } }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGamesBySlug,
    QueryGamesBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.games.length) {
    return {
      notFound: true
    }
  }

  const game = data.games[0]

  // get recommended games
  const { data: recommendedGamesData } = await apolloClient.query<
    QueryRecommended
  >({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      cover: `http://localhost:1337${game.cover?.src}`,
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map(image => {
        return {
          src: `http://localhost:1337${image.src}`,
          label: image.label!
        }
      }),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: String(game.release_date),
        platforms: game.platforms.map(({ name }) => name as Platform),
        publisher: game.publisher?.name as string,
        rating: game.rating as Rating,
        genres: game.categories.map(({ name }) => name)
      },
      recommendedTitle: recommendedGamesData.recommended?.section?.title,
      recommendedGames: gamesMapper(
        recommendedGamesData.recommended?.section?.games
      ),
      upcomingGames: gamesMock
    },
    revalidate: 60 // In seconds
  }
}
