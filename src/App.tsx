import React, { useState } from 'react'
import styled from 'styled-components'
import { Dialog } from './components/Dialog'

const Container = styled.div`
  position: relative;
  max-width: 1300px;
  margin: 30px auto;
`

function App() {
  const [openIsModal, setOpenIsModal] = useState<boolean>(false)

  const closeCallback = () => {
    setOpenIsModal(false)
  }

  return (
    <Container className='App'>
      <button onClick={() => setOpenIsModal(true)}>Open Dialog</button>

      <Dialog
        title='Title'
        isOpen={openIsModal}
        onClose={closeCallback}
        closeOnOverlayClick={true}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </Dialog>
    </Container>
  )
}

export default App
