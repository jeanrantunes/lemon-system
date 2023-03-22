import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dialog as DialogComponent } from './Dialog'

export default {
  title: 'Dialog',
  component: DialogComponent,
  argTypes: {
    children: {
      options: ['Paragraph', 'Paragraphs', 'ParagraphAndImage'],
      mapping: {
        Paragraph: (
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis,
            eu reclamis.Si num tem leite então bota uma pinga aí cumpadi!Suco de
            cevadiss, é um leite divinis.
          </p>
        ),
        Paragraphs: (
          <>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Per aumento de
              cachacis, eu reclamis.Si num tem leite então bota uma pinga aí
              cumpadi!Suco de cevadiss, é um leite divinis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </>
        ),
        ParagraphAndImage: (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <img
              src='http://via.placeholder.com/311x207'
              alt='some placeholder image'
            />
          </>
        )
      }
    }
  }
} as ComponentMeta<typeof DialogComponent>

const Template: ComponentStory<typeof DialogComponent> = args => (
  <DialogComponent {...args}>{args.children}</DialogComponent>
)

export const DialogWithParagraph = Template.bind({})

DialogWithParagraph.args = {
  title: 'title',
  isOpen: true,
  children: 'Paragraph',
  closeOnOverlayClick: true
}

export const DialogWithMultipleParagraph = Template.bind({})

DialogWithMultipleParagraph.args = {
  title: 'title',
  isOpen: true,
  children: 'Paragraphs',
  closeOnOverlayClick: true
}

export const DialogParagraphAndImage = Template.bind({})

DialogParagraphAndImage.args = {
  title: 'title',
  isOpen: true,
  children: 'ParagraphAndImage',
  closeOnOverlayClick: true
}
