import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstars Games',
    img: '/images/red-dead-img.jpg',
    price: '250'
  }
} as Meta

export const Basic: Story<GameCardProps> = args => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
