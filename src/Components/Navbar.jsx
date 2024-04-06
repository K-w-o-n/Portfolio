import React, { useState, useEffect } from "react";

export default function Navbar() {
  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skill" },
    { name: "Projects", link: "#project" },
    { name: "Contact", link: "#contact" },
  ];
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999]  ${
        sticky ? "md:bg-white/60 bg-white text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-20">
          <h4 className="text-4xl uppercase font-bold ">
            k<span className="text-cyan-600">wo</span>n
          </h4>
        </div>
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white" : ""
          }text-gray-900 md:block hidden px-7 py-2 bg-white font-medium
            rounded-bl-full`}
        >
          <ul className="flex items-center uppercase text-lg gap-1 mx-20 py-2">
            {menuLinks.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-700">
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`text-3xl z-[999] md:hidden m-5 ${
            open ? "text-gray-900" : "text-gray-100"
          }`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 h-screen absolute
         w-2/3 top-0 right-0 bg-white px-7 py-2 font-medium duration-500 ${
           open ? "right-0" : "right-[-100%]"
         }`}
        >
          <ul className="flex flex-col justify-center h-full text-lg py-2 gap-10">
            {menuLinks.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600 uppercase" onClick={() => setOpen(false)}>
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
