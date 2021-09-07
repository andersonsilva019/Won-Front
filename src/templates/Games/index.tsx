import Base from 'templates/Base'

import GameCard, { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'
import * as S from './styles'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const Games = ({ games = [], filterItems = [] }: GamesTemplateProps) => {
  const handleFilter = () => {
    console.log('filter')
  }

  const handleShowMore = () => {
    console.log('show more')
  }
  return (
    <Base>
      <Container>
        <S.Main>
          <ExploreSidebar items={filterItems} onFilter={handleFilter} />
          <section>
            <Grid>
              {!!games &&
                games.map(game => <GameCard key={game.title} {...game} />)}
            </Grid>
            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Games
