import React from "react";
import logo from "../assets/images/logo.jpg";
import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
import ca from "../assets/images/ca.png";

const Hero = () => {
  return (
    <div className="bg-cover bg-fixed bg-center">
      <section className="flex items-center justify-center">
        <img
          src={ca}
          alt="Hero"
          className="w-full h-auto sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] object-cover"
        />
      </section>
    </div>
  );
};

export default Hero;
