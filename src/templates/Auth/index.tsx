import Link from 'next/link'
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
        <S.BannerContent>
          <Link href="/">
            <a>
              <Logo id="banner" />
            </a>
          </Link>
          <div>
            <Heading size="huge">All your favorite games is one place</Heading>
            <S.Subititle>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </S.Subititle>
          </div>
          <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>
      <S.Content>
        <S.ContentWrapper>
          <Link href="/">
            <a>
              <Logo id="content" color="black" size="large" />
            </a>
          </Link>

          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>
          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Container>
  )
}

export default Auth
