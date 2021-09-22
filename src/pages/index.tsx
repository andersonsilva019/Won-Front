import { GetStaticProps } from 'next'
import Home, { HomeTemplateProps } from 'templates/Home'

import gamesMock from 'components/GameCardSlider/mock'
import highLightMock from 'components/Highlight/mock'
import { initializeApollo } from '../../lib/apolloClient'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
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
      banners: banners.map(banner => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon?.text,
          ribbonColor: banner.ribbon?.color,
          ribbonSize: banner.ribbon?.size
        })
      })),
      newGamesTitle: sections?.newGames?.title,
      newGames: newGames.map(game => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      freeGamesTitle: sections?.freeGames?.title,
      freeHighligth: {
        title: sections?.freeGames?.highlight?.title,
        subtitle: sections?.freeGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.freeGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1337${sections?.freeGames?.highlight?.floatImage?.url}`,
        buttonLink: sections?.freeGames?.highlight?.buttonLink,
        buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
        alignment: sections?.freeGames?.highlight?.alignment
      },
      freeGames: freeGames.map(game => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1337${sections?.popularGames?.highlight?.floatImage?.url}`,
        buttonLink: sections?.popularGames?.highlight?.buttonLink,
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        alignment: sections?.popularGames?.highlight?.alignment
      },
      mostPopularGames: sections!.popularGames!.games.map(game => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),
      upcommingGamesTitle: sections?.upcomingGames?.title,
      upcommingHighligth: {
        title: sections?.upcomingGames?.highlight?.title,
        subtitle: sections?.upcomingGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.floatImage?.url}`,
        buttonLink: sections?.upcomingGames?.highlight?.buttonLink,
        buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
        alignment: sections?.upcomingGames?.highlight?.alignment
      },
      upcommingGames: upcomingGames.map(game => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      }))
    }
  }
}

// {
//   slug: 'population-zero',
//   title: 'Population Zero',
//   developer: 'Rockstar Games',
//   img: 'https://source.unsplash.com/user/willianjusten/300x140',
//   price: 235.0,
//   promotionalPrice: 215.0
// },
