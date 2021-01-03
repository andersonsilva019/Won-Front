import * as S from './styles'

export default function Main({
  title = 'Nextjs',
  description = 'Typescript, Reactjs, Nextjs e Styled components'
}) {
  return (
    <S.Container>
      <S.Logo
        src="/images/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/images/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código"
      />
    </S.Container>
  )
}
