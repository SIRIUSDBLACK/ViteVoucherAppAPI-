import React from 'react'
import { HiChevronRight, HiOutlineHome } from 'react-icons/hi'
import Container from './Container'
import { Link } from 'react-router-dom'

const Breadcrumb = ({currentPage}) => {
  return (
      <div>
        <div className='flex gap-2 items-center text-sm'>
        <Link to="/" className='flex items-center gap-1'>
        <HiOutlineHome className='size-4'/>
          Dashboard
        </Link>
        <HiChevronRight className='size-5'/>
        <Link>{currentPage}</Link>
        </div>
    </div>
  )
}

export default Breadcrumb