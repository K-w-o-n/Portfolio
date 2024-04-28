import React from 'react'
import resume from "../../src/assets/images/kwonResume.pdf"
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
                Hello, I'm{" "}
                <span className="text-orange-400  font-bold">
                  Yell Khaing
                </span>
                . <span className="font-semibold">Kwon</span> is my favourite
                nickname. At 2023 , I made decision to change my carrer. So, I
                started Web-Development journey.Before this journey, I studied
                Yankin Education College from 2013 to 2015. And I studied
                English major at Pyay University from 2016 to 2019. Now, I've
                been learning to code for 1 year. I started with HTML, CSS,
                Javascript learning from{" "}
                <span className="font-bold text-indigo-600">Youtube</span>. By
                using these technologies, I made simple projects.And I studied
                Programming Basic Course & Professional Web Developer Course by
                Sir Ei Mg at
                <a
                  href="http://fairway.com.mm/"
                  className="no-underline text-orange-600 font-bold cursor-pointer"
                >
                  {" "}
                  Fairway Technology{" "}
                </a>
                .And I studied Extensive PHP Practice Course , Web Development
                With Laravel Course at{" "}
                <a
                  href="https://www.aprogrammer.blog/"
                  className="no-underline text-orange-600 font-bold cursor-pointer"
                >
                  A Programmer
                </a>
                . Now I'm studying React JS, Next JS.
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
