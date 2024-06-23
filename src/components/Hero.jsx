import React from "react";
import logo from "../assets/images/logo.jpg";
import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
import ca from "../assets/images/ca.png"

const Hero = () => {
  return (
    <div>
      <section style={{backgroundImage: `url(${ca})`}} className="h-[80vh] bg-no-repeat bg-cover bg-center ">
        {/* <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 bg-black bg-opacity-70 p-4 rounded-2xl">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Established In 1997
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            RK OVERSEAS
is now justifiably recognised as one
of the country
'
s leading
handcrafted glass decor
manufacturer exporter, offering
clients an outstanding selection in
design and quality
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={logo} alt="mockup" className="rounded-lg w-4/5" />
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
