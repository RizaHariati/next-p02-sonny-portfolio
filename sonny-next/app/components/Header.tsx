"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed t-0 flex items-center justify-between z-20 left-1/2 -translate-x-1/2 w-full max-w-7xl mx-auto ">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://facebook.com/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://share.com/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        className="flex flex-row items-center text-gray-300"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {/* Social Icons for Emai*/}

        <SocialIcon
          url="https://youtube.com/"
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 mr-20">
          Get in touch
        </p>
        <Link href="/admin/">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Admin
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
