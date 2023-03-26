import React from 'react'
import { Link } from 'react-router-dom';


export default function AllProductComp({item}) {
  return (
    <a href={`product/${item.id}`}> 
    <div className='px-3 mx-1'  > 
        <div>
             
        <img src={item.images[0]}  className="w-[250px] h-[200px]" />
        </div>
        <div className='py-3 my-3 text-center'>
            <h1 className='text-lg'>{item.brand}</h1>
            <p className='py-2 text-md'>{item.description.slice(0,35)}</p>
        </div>
        <Link to={`${item.id}`}> 
          <button className='bg-blue-800 py-2 px-6 text-white font-semibold'>View</button>
    </Link>
    </div>
    </a>
  )
}
