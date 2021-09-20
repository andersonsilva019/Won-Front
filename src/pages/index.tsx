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

  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  const banners = data.banners.map(banner => ({
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
  }))

  return {
    revalidate: 60, // In seconds
    props: {
      banners,
      freeGames: gamesMock,
      freeHighligth: highLightMock,
      mostPopularGames: gamesMock,
      mostPopularHighlight: highLightMock,
      newGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highLightMock,
      upcommingMoreGames: gamesMock
    }
  }
}
