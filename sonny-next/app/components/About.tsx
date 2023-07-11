import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-evenly max-w-7xl relative text-center md:text-left mx-auto gap-10 overflow-hidden">
      <h2 className="uppercase text-gray-500 text-2xl tracking-widest absolute top-24">
        About
      </h2>
      {/* image */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
        >
          <Image
            src="/images/ProfilePic.jpg"
            alt="profile picture"
            width={400}
            height={400}
            className="h-[200px] w-[200px]  md:h-[400px] md:w-[400px] rounded-full md:rounded-md overflow-hidden object-cover  flex-shrink-0"
          />
        </motion.div>

        <div className="w-fit max-w-3xl">
          {/* subtitle */}
          <h1 className="capitalize">Here is a little background</h1>
          {/* text */}
          <p>
            I mostly work on Front End Developing, from designing to testing to
            deployment. I also dabble on the Back End creating simple CRUD data.
            Designing apps and websites that are custom-made to your need is my
            interest. My favorite programming tool is React.JS, but I also enjoy
            working with Laravel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
