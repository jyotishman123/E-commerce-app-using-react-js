import React from 'react'

export default function singleProductName({product}) {
  return (
     <>
     <div className='px-[150px] my-[50px]'>
        <h1 className='text-2xl font-normal text-slate-600'>{product.brand} / <span className='text-xl font-light'>{product.category}</span></h1>
     </div>
     </>
  )
}
