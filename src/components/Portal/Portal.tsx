import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
  wrapperId: string
}

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)

  return wrapperElement
}

export const Portal = ({ children, wrapperId }: Props) => {
  const [wrapperElement, setWrapperElement] = useState<Element | null>(null)

  useEffect(() => {
    let $el = document.getElementById(wrapperId)

    if (!$el) {
      $el = createWrapperAndAppendToBody(wrapperId)
    }

    setWrapperElement($el)
  }, [wrapperId])

  if (!wrapperElement) {
    return null
  }

  return createPortal(children, wrapperElement)
}
