import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSidebar, { ExploreSidebarProps } from '.'

import itemsMock from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: itemsMock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<ExploreSidebarProps> = args => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const WithInitialValue: Story<ExploreSidebarProps> = args => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

WithInitialValue.args = {
  initialValues: {
    platforms: ['windows', 'linux'],
    'under-50': true,
    'under-150': true,
    free: true,
    sort_by: 'low-to-high'
  }
}
