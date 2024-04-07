import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../Components/variants'


export default function Skill() {
  return (
    <motion.section
    variants={fadeIn("down",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.5}}
    id="skill" className="py-6 mt-10">
      <h3 className="text-4xl fone-semibold text-center">
        MY <span className="text-cyan-600">SKILLS</span>
      </h3>
      <div className="flex gap-5 justify-center sm:flex-wrap">
        <div className=" m-10 sm:w-full md:w-2/5">
          <div>
            <h4 className="font-semibold text-2xl text-center">Frontend</h4>
          </div>
          <div className="flex-1 mt-8">
            <div class="mb-1 text-base font-medium dark:text-white">HTML 5</div>

            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="bg-blue-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-2/4">
                50
              </div>
            </div>
          </div>
          <div className="flex-1 mt-8">
            <div class="mb-1 text-base font-medium dark:text-white">CSS</div>

            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="bg-orange-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-3/5">
                75%
              </div>
            </div>
          </div>
          <div className="flex-1 mt-8">
            <div class="mb-1 text-base font-medium dark:text-white">
              Javascript
            </div>

            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-2/4">
                50
              </div>
            </div>
          </div>
          <div className="flex-1 mt-8">
            <div class="mb-1 text-base font-medium dark:text-white">
              React Js
            </div>

            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-7/12">
                60
              </div>
            </div>
          </div>
          <div className="flex-1 mt-8">
            <div class="mb-1 text-base font-medium dark:text-white">
              Tailwind
            </div>

            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-2/4">
                50
              </div>
            </div>
          </div>
        </div>
        <div className="m-10 sm:w-full md:w-2/5">
          <div>
            <h4 className="font-semibold text-center text-2xl">Backend</h4>
          </div>
          <div className="flex-1 mt-8">
            <div class="mb-1 text-base font-medium dark:text-white">PHP</div>
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-2/4">
                50
              </div>
            </div>
          </div>
          <div className="flex-1 mt-8">
            <div class="mb-1 text-base font-medium dark:text-white">
              Laravel
            </div>
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="bg-cyan-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-3/4">
                75
              </div>
            </div>
          </div>
          <div className="flex-1 mt-8">
            <div class="mb-1 text-base font-medium dark:text-white">MySQL</div>
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="bg-blue-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-2/4">
                50
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
