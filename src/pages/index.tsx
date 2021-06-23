import { GetStaticProps } from 'next'
import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highLightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
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
