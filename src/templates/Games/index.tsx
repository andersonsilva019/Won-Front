import { ParsedUrlQueryInput } from 'querystring'
import { useRouter } from 'next/router'
import Base from 'templates/Base'

import GameCard from 'components/GameCard'
import { Container } from 'components/Container'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { useQueryGames } from 'graphql/queries/games'

import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'

import * as S from './styles'
import Empty from 'components/Empty'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const Games = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })


  if (!data) return <p>loading...</p>

  const { games, gamesConnection } = data

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
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
          <ExploreSidebar
            initialValues={parseQueryStringToFilter({
              queryString: query,
              filterItems
            })}
            items={filterItems}
            onFilter={handleFilter}
          />
          <section>
            {data?.games.length ? (
              <>
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
                {hasMoreGames && (
                  <S.ShowMore>
                    {loading ? (
                      <S.ShowMoreLoading src="/images/dots.svg" alt="Loading more games..." />
                    ) : (
                      <S.ShowMoreButton role="button" onClick={handleShowMore}>
                        <p>Show More</p>
                        <ArrowDown size={35} />
                      </S.ShowMoreButton>
                    )}
                  </S.ShowMore>
                )}
              </>
            ) : (
              <Empty
                title=":("
                description="We didn't find any games with this filter"
              />
            )}
          </section>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Games
