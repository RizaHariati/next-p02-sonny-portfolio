"use client";
import React from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, helper] = useTypewriter({
    words: [
      "Hi there, I am Icha Hariati",
      "I love travelling",
      "But I love to code more",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen overflow-hidden flex flex-col items-center justify-center text-center">
      <BackgroundCircles />
      <Image
        src="/images/profile.jpg"
        alt="mypicture"
        height={200}
        width={200}
        priority
        className="rounded-full overflow-hidden relative object-cover mx-auto h-[200px] w-[200px] "
      />

      <div>
        <h2 className="uppercase text-sm text-gray-500 tracking-[15px]">
          software enginerr
        </h2>
        <h1 className=" h-12 text-4xl">
          <span>{text}</span>
        </h1>
      </div>

      <div className="flex  items-center justify-between w-full max-w-4xl z-10 gap-10">
        <Link href="#about">
          <button className="hero-btn" onClick={() => console.log("object")}>
            about
          </button>
        </Link>
        <Link href="#experience">
          <button className="hero-btn">experience</button>
        </Link>

        <Link href="#skills">
          <button className="hero-btn">skills</button>
        </Link>

        <Link href="#projects">
          {" "}
          <button className="hero-btn">projects</button>
        </Link>
      </div>
    </div>
  );
}
