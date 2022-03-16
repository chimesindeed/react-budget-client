import React from 'react'
import Container from 'react-bootstrap/Container'
import { Stack } from 'react-bootstrap'

function App() {
  return (
    <Container className='my-4'>
      <Stack
        direction='horizontal'
        gap='2'
        className='mb-4'>
        text
      </Stack>
    </Container>
  );
}

export default App;
