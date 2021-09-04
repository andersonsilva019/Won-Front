import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListProps) => {
  return (
    <S.Container>
      <Heading lineBottom size="small" color="black">
        My cards
      </Heading>
      {cards?.map(card => (
        <S.Card key={card.number}>
          <img src={card.img} alt={card.flag} />
          <span>{card.number}</span>
        </S.Card>
      ))}
    </S.Container>
  )
}

export default CardsList
