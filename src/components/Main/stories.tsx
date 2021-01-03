import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = args => <Main {...args} />

Basic.args = {
  title: 'Title default',
  description: 'Description default'
}

export const Secondary: Story = args => <Main {...args} />

Secondary.args = {
  title: 'Title default Secondary',
  description: 'Description  Secondary'
}
