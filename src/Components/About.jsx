import React from 'react'
import aboutImg from "../assets/images/pf1.jpg"

export default function About() {

      const info = [
        { text: "Years experience", count: "1" },
        { text: "Completed Projects", count: "10" },
        { text: "Companies Work", count: "06" },
      ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8 flex-1">
        <h3 className="text-4xl font-semiblod">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                As a Fullstack Developer, I bring a unique blend
                of creativity, technical expertise, and problem-solving skills
                to the table. With a passion for building innovative and
                user-centric applications, I thrive on tackling complex
                challenges and turning ideas into reality. My journey in the
                world of software development began with a curiosity-driven
                exploration of various programming languages and technologies.
                Over the years, I've honed my skills in both frontend and
                backend development, mastering languages such as JavaScript,
                PHP and Java, along with frameworks like React, Next JS, Laravel and
                MySQL.
              </p>
            </div>
            <div className="flex mt-10 items-center gap-7">
              {info.map((content) => (
                <div key={content.text}>
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}
                    <span className="text-cyan-600">+</span>
                  </h3>
                  <span className="md:text-base text-xs">{content.text}</span>
                </div>
              ))}
            </div>
            <br />
            <br />
            <br />
            <a href="../assets/Yell Khaing (1).pdf" download>
              <button className="btn-primary">Download CV</button>
            </a>
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
      </div>
    </section>
  );
}
