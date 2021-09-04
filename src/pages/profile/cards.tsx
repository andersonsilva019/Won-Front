import { PaymentCard } from 'components/PaymentOptions'
import CardsList from 'components/CardsList'
import { GetServerSideProps } from 'next'
import Profile from 'templates/Profile'

import cardsMock from 'components/PaymentOptions/mock'

export type CardsPageProps = {
  cards: PaymentCard[]
}

export default function Index({ cards }: CardsPageProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSideProps<CardsPageProps> = async () => {
  return {
    props: {
      cards: cardsMock
    }
  }
}
