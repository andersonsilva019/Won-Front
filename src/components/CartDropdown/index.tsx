import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CartDropdownProps = {
  items?: GameItemProps[]
  total?: string
}

const CartDropdown = ({ items = [], total }: CartDropdownProps) => {
  return (
    <S.Container>
      <Dropdown title={<CartIcon />}>
        <CartList items={items} total={total} hasButton />
      </Dropdown>
    </S.Container>
  )
}

export default CartDropdown
