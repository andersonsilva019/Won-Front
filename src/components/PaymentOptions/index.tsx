import { useState } from 'react'
import { Add, ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

export type PaymentOptionsProps = {
  cards: PaymentCard[]
  handlePayment: () => void
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <S.Container>
      <S.Body>
        <Heading lineBottom color="black">
          Payment
        </Heading>
        <S.CardsList>
          {cards?.map(card => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </S.CardInfo>
              <Radio
                id={card.number}
                value={card.number}
                name="credit-card"
                // eslint-disable-next-line
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}
          <S.AddCard role="button">
            <Add size={14} />
            Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button minimal as="a" fullWidth>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Container>
  )
}

export default PaymentOptions
