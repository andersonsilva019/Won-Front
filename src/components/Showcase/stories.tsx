import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase, { ShowcaseProps } from '.'
import gamesMock from '../GameCardSlider/mock'
import HighLightMock from '../Highlight/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    Story => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<ShowcaseProps> = args => <Showcase {...args} />

Basic.args = {
  title: 'Most popular',
  highlight: HighLightMock,
  games: gamesMock
}

export const WithoutHighlight: Story<ShowcaseProps> = args => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Most popular',
  games: gamesMock
}

export const WithoutTitle: Story<ShowcaseProps> = args => <Showcase {...args} />

WithoutTitle.args = {
  highlight: HighLightMock,
  games: gamesMock
}

export const WithoutGames: Story<ShowcaseProps> = args => <Showcase {...args} />

WithoutGames.args = {
  title: 'Most popular',
  highlight: HighLightMock
}
