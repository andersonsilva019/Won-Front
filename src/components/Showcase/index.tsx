import { GameCardProps } from '../GameCard'
import GameCardSlider from '../GameCardSlider'
import Heading from '../Heading'
import Highlight, { HighlightProps } from '../Highlight'
import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  color?: 'black' | 'white'
}

const Showcase = ({
  title,
  games,
  highlight,
  color = 'white'
}: ShowcaseProps) => {
  return (
    <S.Container>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}
      {!!highlight && <Highlight {...highlight} />}
      {!!games && <GameCardSlider items={games} colorDots={color} />}
    </S.Container>
  )
}

export default Showcase
