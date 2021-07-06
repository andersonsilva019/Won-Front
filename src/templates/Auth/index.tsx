import { ReactNode } from 'react'
import Logo from 'components/Logo'
import Heading from 'components/Heading'
import * as S from './styles'

type AuthProps = {
  title: string
  children: ReactNode
}

const Auth = ({ title, children }: AuthProps) => {
  return (
    <S.Container>
      <S.BannerBlock>
        <Logo />
        <Heading>All your favorite games is one place</Heading>
        <S.Subititle>
          <strong>WON</strong> is the best and most complete gaming platform.
        </S.Subititle>
        <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
      </S.BannerBlock>
      <S.Content>
        <Logo color="black" size="large" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.Content>
    </S.Container>
  )
}

export default Auth
