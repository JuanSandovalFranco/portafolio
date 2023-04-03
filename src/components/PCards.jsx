"use client";

import { useState } from "react";
import Image from "next/image";
import {
  IoAdd,
  IoArrowRedoCircleOutline,
  IoImagesOutline,
} from "react-icons/io5";

const PCards = ({ project }) => {
  const handleOpenImages = (images) => {
    images.map((el) => window.open(el.src));
  };

  const [more, setMore] = useState(false);
  return (
    <div className="flex flex-col w-[80%] sm:w-auto max-w-[380px] h-[500px] bg-white rounded-xl relative transition-all duration-150 hover:shadow-2xl hover:scale-105">
      <div className="absolute top-0 -right-10 gap-3">
        <button
          className=" rounded-full p-4 bg-main text-white text-3xl shadow-2xl hover:-mt-1"
          onClick={(e) => setMore((prev) => !prev)}
          aria-label="abrir menu de opciones para elegir mas elementos del proyecto"
        >
          <IoAdd />
        </button>
      </div>
      <div
        className={`absolute top-[70px] -right-10 gap-3 ${
          more ? "flex flex-col" : "hidden"
        }`}
      >
        <button className=" rounded-full p-4 bg-slate-200 text-gray-800 text-3xl shadow-2xl">
          <IoImagesOutline onClick={(e) => handleOpenImages(project.images)} />
        </button>
        <a
          href={project.url}
          target="_blank"
          className=" rounded-full p-4 bg-slate-200 text-gray-800 text-3xl shadow-2xl"
        >
          <IoArrowRedoCircleOutline />
        </a>
      </div>
      <div className="w-full h-1/2">
        <Image
          src={project.images[0]}
          alt={project.description}
          className="w-[380px] h-[200px] object-cover"
        />
      </div>
      <div
        className="-mt-10 bg-white h-full py-10 px-5 flex flex-col justify-between gap-5"
        style={{ borderRadius: "50px 50px 10px 10px" }}
      >
        <p className="text-center text-2xl text-third font-bold">
          {project.name}
        </p>
        <p className="text-md text-gray-500">{project.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project.tech.map((el) => (
            <span key={el} className="capitalize text-sm text-main">
              #{el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PCards;
