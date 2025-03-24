"use client";
import Connected from '@/component/Connected'
import Contact from '@/component/Contact'
import Feature from '@/component/Feature'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import Hero from '@/component/Hero'
import Intergration from '@/component/Intergration'
import Price from '@/component/Price'
import Testimonail from '@/component/Testimonail'
import React from 'react'
const page = () => {
  return (
    <>
      <div className=" bg-white">
        <Header />
        <main>
          <div className='mt-5'>
            <Hero />
            <Intergration />
          </div>
          <Connected />
          <Feature />
          <Price />
          <Testimonail />
          <Contact />
        </main>
        <Footer />
      </div>
    </>

  )
}

export default page