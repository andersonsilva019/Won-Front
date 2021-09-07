import { GetServerSideProps } from 'next'
import Games, { GamesTemplateProps } from 'templates/Games'

import gamesMock from 'components/GameCardSlider/mock'
import itemsMock from 'components/ExploreSidebar/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <Games {...props} />
}

export const getServerSideProps: GetServerSideProps<GamesTemplateProps> = async () => {
  return {
    props: {
      games: gamesMock,
      filterItems: itemsMock
    }
  }
}
