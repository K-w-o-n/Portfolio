import React from 'react'
import hero from "../assets/images/pf4.jpg"

export default function Hero() {

const socialMedia = [
  { name: "logo-instagram", link: "https://www.instagram.com/" },
  { name: "logo-facebook", link: "https://www.facebook.com/kwon.woo.357/" },
  { name: "logo-twitter", link: "https://twitter.com/?lang=en" },
  { name: "logo-linkedin", link: "https://www.linkedin.com/feed/" },
];

  return (
    <section
      id="home"
      className=" py-10 flex min-h-screen md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center">
        <img
          src={hero}
          alt=""
          className="md:w-8/12 h-8/12 object-cover rounded-full sm:w-6/12 h-6/12"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 font-bold text-white sm:text-3xl">
            <span className="text-cyan-600 md:text-6xl text-5xl">Hola!</span>
            <br />
            My name is Kwon{" "}
            <span className="text-orange-600  sm:text-3xl md:text-5xl">
              (Yell Khaing)
            </span>
          </h1>
          <h4 className="md:text-5xl text-4xl md:leading-normal leading font-bold text-gray-600 mt-4">
            Full Stack Developer
          </h4>
          <button className="mt-8 btn-primary">Contact Me</button>
        </div>
        <div className="mt-10 text-3xl flex items-center md:justify-start justify-center gap-5">
          {socialMedia.map((icon) => (
            <div
              key={icon}
              className="text-gray-600 hover:text-white cursor-pointer"
            >
              
              <a href={icon.link}>
                <ion-icon name={icon.name}></ion-icon>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

