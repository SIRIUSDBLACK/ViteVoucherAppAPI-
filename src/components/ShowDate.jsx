import React from 'react'

const ShowDate = ({timestamp}) => {
    const date = new Date (timestamp)
    const productDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      const productTime = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
  return (
    <>
    <p>{productDate}</p>
    <p>{productTime}</p></>
  )
}

export default ShowDate