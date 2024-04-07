import { React, useRef} from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../Components/variants'

import emailjs from "@emailjs/browser";

export default function Contact() {

   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm("service_h5sbhsb", "template_disu3h7", form.current, {
         publicKey: "bFU7pIC3_Gik2aPZv",
       })
       .then(
         () => {
           alert("successful");
         },
         (error) => {
           console.log("FAILED...", error.text);
         }
       );
   };


  return (
    <motion.section
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}
      id="contact"
      className="py-10 text-white"
    >
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          CONTACT <span className="text-cyan-600">ME</span>
        </h3>
        <p className="text-lg text-gray-400 mt-3">Get in touch</p>
      </div>
      <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto">
        <form
          ref={form}
          className="flex flex-col flex-1 gap-5"
          onSubmit={sendEmail}
        >
          <input type="text" placeholder="Enter Your Name" name="from_name" />
          <input
            type="email"
            placeholder="Enter Your Email"
            name="from_email"
          />
          <textarea
            placeholder="Text Meassage"
            rows={10}
            name="message"
          ></textarea>
          <input type="submit" value="send" className="btn-primary w-fit" />
        </form>
        <div className="ms-10">
          <div className="flex gap-3 p-3 m-3 text-2xl item-center justify-center">
            <ion-icon name="call"></ion-icon>
            <a href="tel:09891150961">09891150961</a>
          </div>
          <div className="flex gap-3 p-3 m-3 text-2xl item-center justify-center">
            <ion-icon name="mail"></ion-icon>
            <a href="mailto:kwonfsdev95gmail.com">kwonfsdev95@gmail.com</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
