import React from 'react'
import resume from "../../src/assets/images/cvyk1092024.pdf"
import aboutImg from "../../src/assets/images/pf2.jpg"
import { motion } from 'framer-motion'
import { fadeIn } from '../Components/variants'



export default function About() {

  return (
    <section id="about" className="py-8 text-white">
      <motion.div
      variants={fadeIn("down",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5}}

       className="text-center mt-8 flex-1">
        <h3 className="text-4xl font-semiblod mb-8">
          ABOUT <span className="text-cyan-600">ME</span>
        </h3>
        
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto text-2xl text-gray-600">
              
               <span className='text-4xl text-indigo-700 font-semibold'> Web Developer</span> with over 1 year of experience in building responsive websites and web applications. Can handle and use technologies and modern frameworks like React Js, Laravel, Vue, Tailwind Css.  A passionate Developer with strong problem-solving skills create more innovative things good in user's experience. Collaborate with cross-functional teams and to be eager for new technologies. I am currently seeking an internship opportunity to apply knowledge and gain practical experience.
              </p>
            </div>
            <br />
            <br />
            <br />
            <div className='ms-6'>
              <a href={resume} download="Resume">
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
          <div className="lg:w-96 h-full relative sm:w-10/12 h-11/12 max-w-sm aboutImg">
            <img
              src={aboutImg}
              alt=""
              className="w-full object-cover bg-cyan-600 rounded-xl"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
