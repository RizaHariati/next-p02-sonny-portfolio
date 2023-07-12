import Link from "next/link";
import React from "react";

const GoToTop = () => {
  return (
    <Link
      href="#hero"
      className=" fixed bg-pink-300 h-12 w-32 z-30 bottom-5 rounded-full flex items-center justify-center uppercase hover:bg-pink-100 transition-all left-1/2  -translate-x-1/2"
    >
      Go To Top
    </Link>
  );
};

export default GoToTop;
