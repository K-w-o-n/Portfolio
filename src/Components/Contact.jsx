import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          CONTACT <span className="text-cyan-600">ME</span>
        </h3>
        <p className="text-lg text-gray-400 mt-3">Get in touch</p>
      </div>
      <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto'>
        <form className='flex flex-col flex-1 gap-5'>
            <input type="text"  placeholder='Enter Your Name'/>
            <input type="email" placeholder='Enter Your Email' />
            <textarea  placeholder="Text Meassage" rows={10}></textarea>
            <button className='btn-primary w-fit'>Send Message</button>
        </form>
      </div>
    </section>
  );
}
