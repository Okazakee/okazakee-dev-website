import React from 'react'

export const Card = ({fields}) => {
  return (
    <div className='bg-[#653bba] rounded-2xl p-4 text-[#e8e8e8] min-w-[25%]'>
      <h1 className='flex justify-between'>title:<p>{fields.title}</p></h1>
      <h1 className='flex justify-between'>img:<p>{fields.img}</p></h1>
      <h1 className='flex justify-between'>website:<p>{fields.website}</p></h1>
      <h1 className='flex justify-between'>source code:<p>{fields.source_code}</p></h1>
      <h1 className='flex justify-between'>description:<p>{fields.description}</p></h1>
    </div>
  )
}