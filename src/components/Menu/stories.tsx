import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<MenuProps> = args => <Menu {...args} />

Basic.parameters = {
  layout: 'fullscreen',
  backgounds: {
    default: 'won-dark'
  }
}

export const Logged: Story<MenuProps> = args => <Menu {...args} />

Logged.args = {
  username: 'John Doe'
}
