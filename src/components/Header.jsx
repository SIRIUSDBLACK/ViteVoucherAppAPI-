import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <header>
      <Container>
      <h1 className='text-2xl font-bold text-stone-800'>Voucher App</h1>
      <p className='text-stone-400 font-medium'>CodePot</p>
      </Container>
    </header>
  )
}

export default Header