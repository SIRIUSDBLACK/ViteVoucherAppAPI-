import React from 'react'
import { HiChevronRight, HiOutlineHome } from 'react-icons/hi'
import Container from './Container'
import { Link } from 'react-router-dom'

const Breadcrumb = ({currentPage,links}) => {
  return (
      <div>
        <div className='flex gap-2 items-center mb-5 text-xs'>
        <Link to="/" className='flex items-center gap-1'>
        <HiOutlineHome className='size-4'/>
          Dashboard
        </Link>

        

        {links && links.map((link,index) => <Link to={`${link.path}`} key={index} className='flex items-center gap-1'>
        <HiChevronRight className='size-5'/>
          {link.title}      
        </Link>)}
        
        <HiChevronRight className='size-5'/>
        <Link>{currentPage}</Link>
        </div>
    </div>
  )
}

export default Breadcrumb