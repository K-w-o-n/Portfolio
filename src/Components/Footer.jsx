import React from "react";
import html from "../assets/images/html.png";
import css from "../assets/images/css-3.png";
import javascript from "../assets/images/java-script.png";
import java from "../assets/images/java.png";
import php from "../assets/images/php.png";
import jslibrary from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import mysql from "../assets/images/mysql.png";
import bootstrap from "../assets/images/bootstrap.png";
import git from "../assets/images/git.png";
import laravel from "../assets/images/laravel.png";
export default function Footer() {
  const socialMedia = [
    {
      iconName: "logo-instagram",
      link: "https://www.instagram.com/",
      name: "Instagram",
    },
    {
      iconName: "logo-facebook",
      link: "https://www.facebook.com/kwon.woo.357/",
      name: "facebook",
    },
    {
      iconName: "logo-twitter",
      link: "https://twitter.com/?lang=en",
      name: "twitter",
    },
    {
      iconName: "logo-linkedin",
      link: "https://www.linkedin.com/feed/",
      name: "LinkedIn",
    },
    {
      iconName: "logo-github",
      link: "https://github.com/K-w-o-n",
      name: "Github",
    },
  ];

  return (
    <section id="contact" className="w-full  bg-gray-900 mt-20 flex  flex-col">
      <div className="flex m-10 justify-center w-3/5 mx-auto">
        <div className="flex flex-1 h-10 w-10 object-fit">
          <img src={html} alt="" />
        </div>
        <div className="flex flex-1 h-10 w-10 object-fit">
          <img src={css} alt="" />
        </div>
        <div className="flex flex-1  h-10 w-10 object-fit">
          <img src={javascript} alt="" />
        </div>
        <div className="flex flex-1  h-10 w-10 object-fit">
          <img src={tailwind} alt="" />
        </div>
        <div className="flex flex-1  h-10 w-10 object-fit">
          <img src={jslibrary} alt="" />
        </div>
        <div className="flex flex-1  h-10 w-10 object-fit">
          <img src={bootstrap} alt="" />
        </div>
        <div className="flex flex-1  h-10 w-10 object-fit">
          <img src={php} alt="" />
        </div>
        <div className="flex flex-1  h-10 w-10 object-fit">
          <img src={java} alt="" />
        </div>
        <div className="flex flex-1  h-10 w-10 object-fit">
          <img src={mysql} alt="" />
        </div>
        <div className="flex flex-1  h-10 w-10 object-fit">
          <img src={git} alt="" />
        </div>
        <div className="flex flex-1  h-10 w-10 object-fit">
          <img src={laravel} alt="" />
        </div>
      </div>
      <div className="flex flex-1 justify-between items-center mx-auto w-4/5 gap-5 mt-5 md:flex-row flex-wrap">
        <div>
          <h1 className="text-2xl font-bold">Contact Info</h1>
          <div>
            <div className="flex gap-3 m-3 text-gray-600 hover:text-white cursor-pointer j items-center">
              <ion-icon name="call"></ion-icon>
              <a href="tel:09891150961">09891150961</a>
            </div>
            <div className="flex gap-3 m-3 text-gray-600 hover:text-white cursor-pointer justify-center items-center">
              <ion-icon name="mail"></ion-icon>
              <a href="mailto:kwonfsdev95gmail.com">kwonfsdev95@gmail.com</a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center mb-3">Social Media</h1>
          <div className="flex items-center md:flex-col sm:flex-col">
            {socialMedia.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer flex justify-center items-center"
              >
                <a href={icon.link} className="">
                  <ion-icon name={icon.iconName}></ion-icon>
                </a>
                <span>{icon.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center">Services</h1>
          <div className="flex gap-3 m-3 text-gray-600 hover:text-white cursor-pointer j items-center">
            <p>Responsive Website</p>
          </div>
          <div className="flex gap-3 m-3 text-gray-600 hover:text-white cursor-pointer j items-center">
            <p>Web Development</p>
          </div>
        </div>
      </div>

      <div className="mt-20 h-20 text-center">
        Copyright &copy; 2024 By Kwon. All rights reserved.
      </div>
    </section>
  );
}
