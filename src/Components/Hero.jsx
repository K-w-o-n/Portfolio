import React from 'react'

export default function Hero() {

const socialMedia = [
    "logo-instagram",
    "logo-facebook",
    "logo-twitter",
    "logo-linkedin",
];

  return (
    
      <section
       id="home" className=' py-10 flex min-h-screen md:flex-row flex-col items-center'>
        <div className='flex-1 flex items-center justify-center'>
            <img src="" alt="" />
        </div>
        <div className='flex-1'>
            <div className='md:text-left text-ccnter'>
                <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 font-bold text-white'>
                  <span>Hello!</span>
                </h1>
            </div>
        </div>
      </section>
    
  )
}

