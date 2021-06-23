import Menu from 'components/Menu'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'
import BannerSlider from '~/components/BannerSlider'
import GameCardSlider from '~/components/GameCardSlider'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  freeGames,
  freeHighligth,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames
}: HomeTemplateProps) => {
  return (
    <section>
      <Container>
        <Menu />
        <BannerSlider items={banners} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
        <GameCardSlider items={newGames} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} colorDots="white" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} colorDots="white" />
        <Highlight {...upcommingHighligth} />
        <GameCardSlider items={upcommingMoreGames} colorDots="white" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
        <Highlight {...freeHighligth} />
        <GameCardSlider items={freeGames} colorDots="white" />
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  )
}

export default Home
