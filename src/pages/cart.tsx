import { GetServerSideProps } from 'next'
import Cart, { CartTemplateProps } from 'templates/Cart'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import itemsMock from 'components/CartList/mock'
import cardMock from 'components/PaymentOptions/mock'

export default function Index(props: CartTemplateProps) {
  return <Cart {...props} />
}

export const getServerSideProps: GetServerSideProps<CartTemplateProps> = async () => {
  return {
    props: {
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock,
      items: itemsMock,
      total: 'R$ 330,00',
      cards: cardMock
    }
  }
}
