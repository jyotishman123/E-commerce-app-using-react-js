import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className=' flex border-2 border-slate-100 py-6 px-3 justify-around items-center w-[100%]'>
        <div>
            <h1 className='text-2xl'>ThemeStore</h1>
        </div>
        <div>
            <ul className='flex'>
            <li className='mx-6'><Link to="/">Home</Link></li>
            <li className='mx-6'><Link to="/product">Product</Link></li>
            <li className='mx-6'><Link to="/cart">Cart</Link></li>
            </ul>

        </div>
      </div>
    
    </>
  )
}
