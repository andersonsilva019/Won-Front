import { GameCardProps } from '../GameCard'
import GameCardSlider from '../GameCardSlider'
import Heading from '../Heading'
import Highlight, { HighlightProps } from '../Highlight'
import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

const Showcase = ({ title, games, highlight }: ShowcaseProps) => {
  return (
    <S.Container>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}
      {!!highlight && <Highlight {...highlight} />}
      {!!games && <GameCardSlider items={games} colorDots="white" />}
    </S.Container>
  )
}

export default Showcase
