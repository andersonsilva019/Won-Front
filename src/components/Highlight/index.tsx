import Button from '../Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  floatImage,
  buttonLink,
  backgroundImage
}: HighlightProps) => {
  return (
    <S.Container backgroundImage={backgroundImage}>
      {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Container>
  )
}

export default Highlight
