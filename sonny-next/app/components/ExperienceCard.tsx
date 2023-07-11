import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

export default function ExperienceCard() {
  return (
    <article className=" flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-stone-800 p-10 cursor-pointer transition-opacity duration-200 scroll-smooth">
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/anak1.jpg"
          alt="profile picture"
          width={400}
          height={400}
          className="h-[100px] w-[100px]  rounded-full overflow-hidden object-cover flex-shrink-0"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of IchaCodes</h4>
        <p className="font-bold text-2xl uppercase">ICHACODES</p>
        <div className="flex space-x-2 my-2">
          <SocialIcon url="https://facebook.com/" className="h-10 w-10" />
          <SocialIcon url="https://facebook.com/" className="h-10 w-10" />
          <SocialIcon url="https://facebook.com/" className="h-10 w-10" />
        </div>
        <p>Started work... - ended...</p>
      </div>
      <ul>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
      </ul>
    </article>
  );
}
