import {
  figma,
  html,
  javascript,
  Node,
  python,
  react,
  tailwind,
  css,
  nextjs,
  mysql,
  mongodb,
  websiteLanding,
  natours_1,
  natours_2,
  natours_3,
  puntobank_1,
  puntobank_2,
  puntobank_3,
  e_commerce,
  puntobank,
  freelancer,
} from "assets";

export const experiencie = [
  {
    title: "Desarrollador Independiente",
    icon: freelancer,
    date: "Enero 2022 - Agosto 2022",
    sub: "Desarrollando diferentes proyectos",
    topics: [
      "Implementación de mockups y diferentes diseños a la interfaz",
      "Desarrollo de API REST y diferentes servicios back-end",
      "Interviniendo en procesos de desarrollo y participacion de nuevas funcionalidades",
    ],
  },
  {
    title: "Desarrollador Front-end React.js",
    icon: puntobank,
    date: "Septiembre 2022 - Diciembre 2022",
    sub: "Puntobank S.A.S",
    topics: [
      "Diseño de interfaz UI y UX en figma con la propuesta de valor",
      "Desarrollo de toda la interfaz y la funcionalidad en colaboración con el desarrollador back-end desarrollado en Laravel y front-end con React.js",
      "Participando e implementando nuevas funcionalidades dentro de la app",
    ],
  },
];

export const navLinks = [
  {
    id: "sobre-mi",
    title: "Sobre Mi",
  },
  {
    id: "proyectos",
    title: "Proyectos",
  },
  {
    id: "experiencia",
    title: "Experencia",
  },
  {
    id: "contacto",
    title: "Contacto",
  },
];

export const projects = [
  {
    name: "Sitio web empresarial",
    url: "https://hidrobombas.com.co",
    images: [websiteLanding],
    description:
      "sitio web empresarial y profesional de montajes hidraulicos, incluye landing page, pagina de servicios, call to action, pagina de contacto",
    tech: ["html", "scss", "css", "javascript"],
  },
  {
    name: "App de reservacion de tures",
    url: "https://www.google.com",
    images: [natours_1, natours_2, natours_3],
    description:
      "Aplicacion de tures con logica de reservas de los mismos, funcionalidades de geolocalizacion y trayectos de los destinos, con pagina de usuarios y login",
    tech: ["node js", "pug", "express js", "mongoDB", "javascript"],
  },
  {
    name: "app de aprobaciones de credito bancarias",
    url: "https://dashboard.puntobank.co/login",
    images: [puntobank_1, puntobank_2, puntobank_3],
    description:
      "Apliacion web de aprobaciones de credito bancarias, operaciones crud, para crear editar y eliminar solicitudes de los clientes, contiene roles y creacion de nuevos usuarios, con un dashboard de graficas incluidas",
    tech: ["react.js", "tailwind", "context api", "API REST"],
  },

  {
    name: "e-commerce de ropa y tecnologia",
    url: "https://www.google.com",
    images: [e_commerce],
    description:
      "e-commerce en linea de venta de sneakers y ropa en general, como asi tambien de celulares y tecnologia, con usuarios y carrito, con checkout de compras, (proyecto propio y todavia esta en construccion)",
    tech: [
      "react.js",
      "mongo db",
      "tailwind",
      "next js",
      "API REST",
      "Node js",
    ],
  },
];

export const skills = [
  {
    id: "HTML5",
    image: html,
  },
  {
    id: "CSS",
    image: css,
  },
  {
    id: "JavaScript",
    image: javascript,
  },
  {
    id: "React",
    image: react,
  },
  {
    id: "Node js",
    image: Node,
  },
  {
    id: "mongodb",
    image: mongodb,
  },
  { id: "mysql", image: mysql },
  {
    id: "Python",
    image: python,
  },
  {
    id: "Tailwind",
    image: tailwind,
  },
  {
    id: "Figma",
    image: figma,
  },
  {
    id: "Next Js",
    image: nextjs,
  },
];

export const variantsNav = {
  open: { opacity: 1, display: "flex" },
  close: { opacity: 0, display: "none" },
};
