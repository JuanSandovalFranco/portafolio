"use client";

import { skills } from "constant";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/swiper.min.css";
import { Autoplay } from "swiper";

const Skills = () => {
  return (
    <section className="flex mx-auto flex-col gap-20 h-[400px] bg-[#F8F8F8]">
      <div className="text-center flex flex-col gap-5">
        <h2 className="text-third text-center mt-20 text-4xl md:text-6xl">
          Habilidades
        </h2>
        <p className="text-xl text-gray-600">
          habilidades tecnicas y conocimiento que aplico para ser desarrollador
          web fullstack
        </p>
      </div>
      <div className="mx-auto w-[90%] lg:w-full">
        <Swiper
          breakpoints={{
            350: {
              slidesPerView: skills.length / 4,
            },
            540: {
              slidesPerView: skills.length / 3,
            },
            940: {
              slidesPerView: skills.length / 2,
            },
          }}
          slidesPerView={skills.length / 2}
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            reverseDirection: true,
          }}
          centeredSlides={true}
          className="flex justify-center"
          loop={true}
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.id}>
              <Image
                src={skill.image}
                alt={skill.id}
                className="rounded-full"
              ></Image>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
