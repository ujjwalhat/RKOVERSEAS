import React from 'react'
import logo from "../assets/images/about.png";

const AboutComp = () => {
  return (
    <div className='flex flex-col h-[70vh] mt-16 justify-center pb-8 items-center bg-amber-100'>
          <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={logo} alt="mockup" className="rounded-lg w-4/5" />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
           About Us
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
    RK OVERSEAS was born with the
    passion for handcrafted glass
    decor has represented
    exceptional quality and unparallel
    value. We have a history of
    merging glass handcrafts with
    design and trends with tradition <br /><br />
    Being a distinctive brand that
    essentially works with glass, a
    raw material with historical
    roots in our home city
    Firozabad, A city with a
    tradition of glass production
    from more than a century.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default AboutComp
