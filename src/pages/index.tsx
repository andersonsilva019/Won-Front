import { gql, useQuery } from '@apollo/client'
import { GetStaticProps } from 'next'
import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highLightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  const getAllGames = gql`
    query getGames {
      games {
        name
      }
    }
  `

  const { loading, error, data } = useQuery(getAllGames)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return <Home {...props} />
}

export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {
  return {
    props: {
      banners: bannersMock,
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
