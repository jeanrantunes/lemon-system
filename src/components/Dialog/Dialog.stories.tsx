import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dialog as DialogComponent } from './Dialog'

export default {
  title: 'Dialog',
  component: DialogComponent
} as ComponentMeta<typeof DialogComponent>

const Template: ComponentStory<typeof DialogComponent> = args => (
  <DialogComponent {...args} />
)

export const Dialog = Template.bind({})

Dialog.args = {}
