import { GetServerSideProps } from 'next'
import Cart, { CartTemplateProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import cardMock from 'components/PaymentOptions/mock'
import { initializeApollo } from '../../lib/apolloClient'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: CartTemplateProps) {
  return <Cart {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
      items: itemsMock,
      total: 'R$ 330,00',
      cards: cardMock
    }
  }
}
