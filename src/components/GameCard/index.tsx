import Link from 'next/link'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { ReactNode } from 'react'
import Ribbon, { RibbonColor, RibbonSize } from '../Ribbon'
import { formatPrice } from 'utils/formatPrice'
import { CartButton } from 'components/CartButton'

import * as S from './styles'
export type GameCardProps = {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  onFav?: () => void
  ribbon?: ReactNode
  ribbonSize?: RibbonSize
  ribbonColor?: RibbonColor
}

const GameCard = ({
  id,
  slug,
  title,
  price,
  img,
  developer,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: GameCardProps) => {
  return (
    <S.Container>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <Link href={`game/${slug}`} passHref>
        <S.ImageBox>
          <img src={img} alt={title} />
        </S.ImageBox>
      </Link>
      <S.Content>
        <Link href={`game/${slug}`} passHref>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
        </Link>
        <S.FavButton role="button" onClick={onFav}>
          {/* eslint-disable-next-line multiline-ternary */}
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>
        <S.BuyBox>
          {!!promotionalPrice && (
            <S.Price isPromotional>{formatPrice(price)}</S.Price>
          )}
          <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
          <CartButton id={id} />
        </S.BuyBox>
      </S.Content>
    </S.Container>
  )
}

export default GameCard
