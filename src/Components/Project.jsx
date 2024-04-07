import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import project1 from "../assets/images/pj1.png"
import project2 from "../assets/images/pj2.png"
import project3 from "../assets/images/pj3.png"
import "swiper/css";
import "swiper/css/pagination";
import {  Pagination, Autoplay } from "swiper/modules";
import { motion } from 'framer-motion'
import { fadeIn } from '../Components/variants'


export default function Project() {
    const projects = [
      {
        img: project1,
        name: "Portfolio sample",
        github_link: "https://github.com/K-w-o-n/react-pofo-sample",
        live_link: "https://react-pofo-sample.vercel.app/",
      },
      {
        img: project2,
        name: "React filter",
        github_link: "https://github.com/K-w-o-n/ecommerce",
        live_link: "https://react-ecommercekwon.netlify.app",
      },
      {
        img: project3,
        name: "Restaurant order",
        github_link: "https://github.com/K-w-o-n/practicepj",
        live_link: "https://laravel.com/",
      },
    ];

  return (
    <motion.section
    variants={fadeIn("down",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5}}
    id="project" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl fone-semibold">
          MY <span className="text-cyan-600 uppercase">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Projects Showcase</p>
      </div>
      <br />
      <div className="flex max-w-7xl px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full md:full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project, i) => (
              <SwiperSlide>
                <div className="h-fit w-full bg-slate-700 rounded-xl p-4">
                  <img src={project.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github_link}
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-lg"
                    >
                      Github
                    </a>
                    <a
                      href={project.live_link}
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-lg"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
}
