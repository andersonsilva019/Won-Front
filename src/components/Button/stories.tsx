import { Story, Meta } from '@storybook/react/types-6-0'
import { MdAddShoppingCart } from 'react-icons/md'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Basic: Story<ButtonProps> = args => <Button {...args} />

Basic.args = {
  children: 'Buy now'
}

export const withIcon: Story<ButtonProps> = args => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <MdAddShoppingCart />
}
