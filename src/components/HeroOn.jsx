"use client";

import Image from "next/image";
import { foto_me } from "assets";
import { Link as ScrollLink } from "react-scroll";

const HeroOn = () => {
  return (
    <section className="hero-image grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <h1 className="mt-20 md:mt-0 text-4xl md:text-5xl lg:text-6xl leading-relaxed lg:text-start text-center font-bold mx-auto px-5 sm:px-10 lg:px-20">
        Desarrollador web y diseñador UI / UX especialista en <br></br>
        <span className="bg-gradient-to-r from-main to-fourth bg-clip-text text-transparent">
          Node y React JS
        </span>
      </h1>
      <div className="w-full h-full flex justify-center items-center md:justify-end md:items-end relative">
        <Image
          src={foto_me}
          priority={true}
          alt="design and developer, juan dev"
          className=" object-cover rounded-[50px] shadow-2xl w-[70%] h-[70%] md:w-[80%] md:h-[70%] "
        />
        <ScrollLink
          to="contacto"
          smooth={true}
          spy={true}
          className="absolute transition-all duration-200 top-[10%] md:top-[25%] left-auto md:left-[10%] bg-third shadow-md p-5 md:py-8 md:px-20 sm:px-20 text-white text-2xl md:text-4xl hover:ml-5 lg:hover:ml-10 cursor-pointer"
          duration={600}
        >
          Contactame &rarr;
        </ScrollLink>
      </div>
    </section>
  );
};

export default HeroOn;
