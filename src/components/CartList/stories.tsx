import { Story, Meta } from '@storybook/react/types-6-0'
import CartList, { CartListProps } from '.'

import items from './mock'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    cartContextValue: {
      type: ''
    },
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story = args => (
  <div style={{ maxWidth: '80rem' }}>
    <CartList {...args} />
  </div>
)

Basic.args = {
  total: 'R$ 200,00',
  cartContextValue: { items }
}

export const WithButton: Story = args => (
  <div style={{ maxWidth: '80rem' }}>
    <CartList {...args} />
  </div>
)

WithButton.args = {
  total: 'R$ 200,00',
  cartContextValue: { items },
  hasButton: true
}

export const EmptyCartList: Story = () => (
  <div style={{ maxWidth: '80rem' }}>
    <CartList />
  </div>
)
