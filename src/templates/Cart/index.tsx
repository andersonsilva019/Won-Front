import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import { Divider } from 'components/Divider'
import Showcase from 'components/Showcase'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import CartList, { CartListProps } from 'components/CartList'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import * as S from './styles'

export type CartTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedTitle?: string
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
  cards
}: CartTemplateProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>
        <S.Content>
          <CartList />
          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </S.Content>
        <Divider />
      </Container>
      <Showcase
        title={recommendedTitle || 'You may like these games'}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
