import React from 'react'
import html from "../assets/images/html.png"
import css from "../assets/images/css-3.png"
import javascript from "../assets/images/java-script.png"
import java from "../assets/images/java.png"
import php from "../assets/images/php.png"
import laravel from "../assets/images/laravel.png"
import jslibrary from "../assets/images/react.png"
import tailwind from "../assets/images/tailwind.png"
import mysql from "../assets/images/mysql.png"
import bootstrap from "../assets/images/bootstrap.png"
import git from "../assets/images/git.png"
export default function Footer() {
    return (
        <div className='w-full h-80 bg-gray-900 mt-20 flex shadow-2xl'>
            <div className='flex m-10 justify-center w-3/5 mx-auto'>
                <div className='flex flex-1 h-10 w-10 object-fit'>
                    <img src={html} alt="" />
                </div>
                <div className='flex flex-1 h-10 w-10 object-fit'>
                    <img src={css} alt="" />
                </div>
                <div className='flex flex-1  h-10 w-10 object-fit'>
                    <img src={javascript} alt="" />
                </div>
                <div className='flex flex-1  h-10 w-10 object-fit'>
                    <img src={tailwind} alt="" />
                </div>
                <div className='flex flex-1  h-10 w-10 object-fit' >
                    <img src={jslibrary} alt="" />
                </div>
                <div className='flex flex-1  h-10 w-10 object-fit'>
                    <img src={bootstrap} alt="" />
                </div>
                <div className='flex flex-1  h-10 w-10 object-fit'>
                    <img src={laravel} alt="" />
                </div>
                <div className='flex flex-1  h-10 w-10 object-fit'>
                    <img src={php} alt="" />
                </div>
                <div className='flex flex-1  h-10 w-10 object-fit'>
                    <img src={java} alt="" />
                </div>
                <div className='flex flex-1  h-10 w-10 object-fit'>
                    <img src={mysql} alt="" />
                </div>
                <div className='flex flex-1  h-10 w-10 object-fit'>
                    <img src={git} alt="" />
                </div>

            </div>
        </div>
    )
}
