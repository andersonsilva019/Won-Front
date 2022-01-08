import Base from 'templates/Base'

import GameCard, { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { useQueryGames } from 'graphql/queries/games'
import * as S from './styles'

import { LoadingGamesShimmer } from './LoadingGamesShimmer'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const Games = ({ filterItems = [] }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  })

  const handleFilter = () => {
    console.log('filter')
  }

  const handleShowMore = () => {
    fetchMore({
      variables: { limit: 15, start: data?.games.length }
    })
  }
  return (
    <Base>
      <Container>
        <S.Main>
          <ExploreSidebar items={filterItems} onFilter={handleFilter} />
          {/* eslint-disable-next-line */}
          {loading ? (
            <LoadingGamesShimmer />
          ) : (
            <section>
              <Grid>
                {data?.games.map(game => (
                  <GameCard
                    key={game.slug}
                    title={game.name}
                    slug={game.slug}
                    developer={game.developers[0].name}
                    img={`http://localhost:1337${game.cover?.url}`}
                    price={game.price}
                  />
                ))}
              </Grid>
              <S.ShowMore role="button" onClick={handleShowMore}>
                <p>Show More</p>
                <ArrowDown size={35} />
              </S.ShowMore>
            </section>
          )}
        </S.Main>
      </Container>
    </Base>
  )
}

export default Games
