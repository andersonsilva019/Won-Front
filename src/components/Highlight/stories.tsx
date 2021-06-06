import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    buttonLink: '/',
    buttonLabel: 'Buy now',
    backgroundImage: '/images/red-dead-img.jpg'
  }
} as Meta

export const Basic: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} floatImage="/images/red-dead-float.png" />
  </div>
)
