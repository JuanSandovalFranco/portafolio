"use client";

import { logo } from "assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  IoCloseOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMenuOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";
import { navLinks, variantsNav } from "constant";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [toogle, setToogle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <header className="flex bg-transparent items-center h-20 px-10 justify-around z-[1000]">
      <Link href="/">
        <Image
          src={logo}
          width={180}
          height={100}
          alt="logo juandev portafolio"
        ></Image>
      </Link>
      <div className="flex gap-5">
        <ul className="list-none hidden sm:flex gap-2 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <ScrollLink
                spy={true}
                smooth={true}
                duration={800}
                to={link.id}
                className={`transition duration-150 text-slate-500 px-5 py-2 ${
                  active === link.id && link.id !== "contacto"
                    ? "text-gray-900"
                    : ""
                } cursor-pointer ${
                  link.id === "contacto"
                    ? "bg-main text-white rounded-xl shadow-xl hover:scale-150 px-12"
                    : ""
                }`}
                onClick={(e) => setActive(link.id)}
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-5 text-gray-800">
          <a href="https://github.com/JuanSandovalFranco" target="_blank">
            <IoLogoGithub className="text-4xl cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-david-sandoval-franco-a74b56228/"
            target="_blank"
          >
            <IoLogoLinkedin className="text-4xl cursor-pointer" />
          </a>
        </div>
      </div>

      <div className="flex sm:hidden relative">
        <button className="p-6" onClick={(e) => setToogle((prev) => !prev)}>
          {!toogle ? (
            <IoMenuOutline className="text-3xl justify-end" />
          ) : (
            <IoCloseOutline className="text-3xl justify-end" />
          )}
        </button>
      </div>
      <motion.div
        transition={{ type: "spring", stiffness: 100 }}
        animate={toogle ? "open" : "close"}
        variants={variantsNav}
        className="sm:hidden bg-[rgba(255,255,255,0.25)] border-2 border-[rgba(255,255,255,0.18)] rounded shadow-sm backdrop-blur-md absolute w-[50%] top-20 right-[20px] h-[50%] min-w-[300px] px-5 py-10 cursor-pointer z-[1000]"
      >
        <ul className="flex flex-col gap-10 text-2xl font-bold">
          {navLinks.map((link) => (
            <li key={link.id}>
              <ScrollLink
                spy={true}
                smooth={true}
                duration={800}
                to={link.id}
                className="text-slate-500 px-5 py-2 transition-all duration-150 hover:ml-5 hover:text-3xl hover:text-third cursor-pointer"
                onClick={(e) => {
                  setToogle((prev) => !prev);
                  setActive(link.id);
                }}
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
};

export default NavBar;
