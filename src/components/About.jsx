import { foto1, foto2 } from "assets";
import Image from "next/image";

const About = () => {
  return (
    <section id="sobre-mi" className="about-me">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 w-[90%%] h-full">
        <div className="flex flex-col sm:flex-row justify-center items-center mx-auto min-h-[600px] gap-6">
          <Image
            src={foto1}
            alt=""
            className="mt-10 sm:mt-0 w-[300px] h-[300px] object-cover rounded-xl shadow-2xl"
          />
          <Image
            src={foto2}
            alt=""
            className="w-[300px] h-[300px] object-cover rounded-xl shadow-2xl"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-10 w-auto">
          <h2 className="mt-10 lg:mt-0 bg-gradient-to-r text-gray-600 tracking-[1rem] text-5xl sm:text-6xl md:text-7xl text-center font-bold">
            Sobre Mi
          </h2>
          <p className="text-xl sm:text-2xl text-justify mx-auto px-10 md:px-20 text-gray-500 leading-relaxed">
            Hola soy Juan,{" "}
            <span className="bg-gradient-to-r from-main to-fourth bg-clip-text text-transparent font-bold">
              desarrollador web y Emprendedor
            </span>
            , poseo habilidades como diseñador UI/UX manejo frameworks como
            React, Express para Node y construccion de Rest API, mis proyectos
            se destacan por ser de alta calidad y efectividad entre los usuarios
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
