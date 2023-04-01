"use client";

import { useEffect, useRef, useState } from "react";
import { IoSendOutline } from "react-icons/io5";
import Alert from "./Alert";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [show, setShow] = useState(false);
  const formRef = useRef();
  const [stateEmail, setStateEmail] = useState({
    message: "",
    status: "",
  });

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show]);

  const handleEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nfsd94l",
        "template_85cc11k",
        formRef.current,
        "KHX4s-Sp-iO17otGh"
      )
      .then(
        (result) => {
          setShow(true);
          setStateEmail({
            message:
              "Correo enviado, me pondre en contacto apenas lo vea, Gracias!",
            state: "success",
          });
        },
        (error) => {
          setShow(true);
          setStateEmail({
            message: error.message,
            state: "Error",
          });
        }
      );
  };
  return (
    <section
      className="w-full bg-slate-100 max-h-[1200px] h-auto"
      id="contacto"
    >
      {show ? (
        <Alert
          message={stateEmail.message}
          type={stateEmail.state}
          showProps={show}
        />
      ) : null}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full pt-20 gap-10 ">
        <div className="bg-gradient-to-tr from-third to-main mx-auto h-[300px] lg:w-full w-[90%] lg:h-[80%] rounded-[50px] lg:translate-x-20 flex m-auto font-semibold items-center justify-center ">
          <h3 className="text-3xl text-white text-center flex flex-col">
            Diseñemos y desarrollemos algo{" "}
            <span className="text-4xl md:text-9xl">Increible</span>
          </h3>
        </div>
        <form
          className="bg-third px-5 py-10 flex flex-col gap-6 rounded-xl text-white w-[90%] lg:w-full mx-auto"
          ref={formRef}
          onSubmit={handleEmail}
        >
          <h2 className="text-center text-white font-bold text-5xl">
            Contactame
          </h2>
          <div className="flex flex-col w-[80%] mx-auto gap-3 mt-6">
            <label
              htmlFor="name"
              className="text-white text-md text-xl
          "
            >
              Nombre
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Juan Aristizabal"
              className="bg-[#131F45] px-8 py-5 rounded-md focus:ring-2 focus:ring-slate-600 outline-none"
              required
            />
          </div>
          <div className="flex flex-col w-[80%] mx-auto gap-3">
            <label
              htmlFor="email"
              className="text-white text-md text-xl
          "
            >
              Correo
            </label>
            <input
              type="email"
              pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
              name="user_email"
              id="email"
              placeholder="google.com"
              className="bg-[#131F45] px-8 py-5 rounded-md focus:ring-2 focus:ring-slate-600 outline-none"
              required
            />
          </div>
          <div className="flex flex-col w-[80%] mx-auto gap-3">
            <label
              htmlFor="message"
              className="text-white text-md text-xl
          "
            >
              Mensaje
            </label>
            <textarea
              rows={5}
              type="text"
              name="message"
              id="message"
              placeholder="Hola Juan, he visto tu trabajo y es genial, me gustaria trabajar contigo en un futuro proyecto"
              className="bg-[#131F45] px-8 py-5 rounded-md focus:ring-2 focus:ring-slate-600 outline-none"
              required
            />
          </div>
          <div className="flex justify-end w-[90%]">
            <button className="text-2xl tracking-wide bg-main w-[160px] h-[50px] flex justify-center items-center gap-3 rounded-md text-white font-bold transition duration-150 hover:bg-blue-800">
              Enviar <IoSendOutline />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
