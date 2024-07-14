import React from "react";
import logo from "../assets/images/about.png";

const AboutComp = () => {
  return (
    <div className="flex flex-col h-auto sm:h-[100vh] mt-16 justify-center pb-8 items-center bg-orange-100">
      <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          <div className=" h-auto mt-10   lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={logo}
              alt="mockup"
              className="rounded-lg w-4/5 h-4/5 mt-10 bottom-0"
            />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              About Us
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8  md:text-md lg:text-xl dark:text-gray-400">
              Established In "1997" RK OVERSEAS is now justifiably recognized as
              one of the country's leading handcrafted glass decor manufacturer
              exporter, offering clients an outstanding selection in design and
              quality. RK OVERSEAS was born with the passion for handcrafted
              glass decor has represented exceptional quality and unparalleled
              value. <br></br><br></br>We have a history of merging glass handicrafts with design
              and trends with tradition. We are pleased to introduce ourselves
              as a prominent manufacturer and exporter of glass handicraft home
              decor such as Vases, Votives, Candle Holders, Christmas Tree,
              Christmas Hanging Ornaments, Light Pendant, Mia Jars, Decanter,
              Tabletop, Owl, Penguins, Mushrooms Etc in various shapes, sizes,
              colours, designs, pure gold/silvering, crackle, metallic, stoned,
              luster, mosaic designs, etc. We Are Experts In Product Development
              And Product Customisation. We Are Consistently Developing New
              Products, Moulds And Designs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutComp;
