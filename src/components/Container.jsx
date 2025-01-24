import React from 'react'
const Container = ({children}) => {
  return (
    <div className="w-full md:w-[720px] lg:w-[1100px] px-2 pt-4 mx-auto">{children}</div>
  )
}

export default Container