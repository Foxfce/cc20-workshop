import React from 'react'
import NavIcon from './NavIcon'

function Header(props) {
const {itemCount} = props;

  return (
    <div className='flex justify-between h-15 bg-amber-400'>
      <a>img</a>
      <NavIcon itemCount={itemCount} />
    </div>
  )
}

export default Header