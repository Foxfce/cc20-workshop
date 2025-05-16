import React from 'react'
import NavIcon from './NavIcon'

function Header() {
  return (
    <div className='flex justify-between h-15 bg-amber-400'>
      <a>img</a>
      <NavIcon />
    </div>
  )
}

export default Header