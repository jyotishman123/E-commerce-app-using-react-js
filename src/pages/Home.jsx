import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Toprating from '../components/Toprating';
import Phones from '../components/Phones';
import Footer from './Footer';

 

export default function Home() {
  return (
     <>
     <Navbar/>
     <Hero/>
     <Toprating/>
     <Phones/>
     <Footer/>
      
     
     </>
  )
}
