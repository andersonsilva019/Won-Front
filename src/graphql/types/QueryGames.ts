type Game = {
  slug: string
  name: string
  cover: {
    url: string | null
  }
  developers: Array<{ name: string }>
  price: number
}

export type QueryGamesResponse = {
  games: Game[]
}

export type QueryGamesVariables = {
  limit: number
}
