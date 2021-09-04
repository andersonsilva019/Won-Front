import { GetServerSideProps } from 'next'
import Profile from 'templates/Profile'

import ordersMock from 'components/OrdersList/mock'
import OrdersList from 'components/OrdersList'
import { GameItemProps } from 'components/GameItem'

export type OrdersListPage = {
  items: GameItemProps[]
}

export default function Index({ items }: OrdersListPage) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSideProps<OrdersListPage> = async () => {
  return {
    props: {
      items: ordersMock
    }
  }
}
