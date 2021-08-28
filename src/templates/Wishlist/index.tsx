import { Container } from 'components/Container'
import Heading from 'components/Heading'

import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import Base from 'templates/Base'
import Showcase from 'components/Showcase'
// import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>
      </Container>
      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Wishlist
