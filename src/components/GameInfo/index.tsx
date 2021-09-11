import {
  AddShoppingCart as AddShoppingCartIcon,
  FavoriteBorder as FavoriteBorderIcon
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import Heading from 'components/Heading'
import * as S from './styles'
import { formatPrice } from 'utils/formatPrice'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, price, description }: GameInfoProps) => {
  return (
    <S.Container>
      <Heading color="black" lineBottom>
        {title}
      </Heading>
      <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
      <S.Description>{description}</S.Description>
      <S.WrapperButtons>
        <Button size="large" icon={<AddShoppingCartIcon />}>
          Add to cart
        </Button>
        <Button size="large" icon={<FavoriteBorderIcon />} minimal>
          Wishlist
        </Button>
      </S.WrapperButtons>
    </S.Container>
  )
}

export default GameInfo
