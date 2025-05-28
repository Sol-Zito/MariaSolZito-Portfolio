import bank from "../assets/images/Projects/bank.jpg";
import bookmark from "../assets/images/Projects/bookmark.jfif";
import keepNotes from "../assets/images/Projects/keepNotes.png";
import movieLand from "../assets/images/Projects/movieLand.jfif";
import portfolio from "../assets/images/Projects/portfolio.jpg";
import salud from "../assets/images/Projects/salud.png";

import {
  SiCss3,
  SiDart,
  SiFlutter,
  SiHtml5,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { DiHtml5, DiJava, DiJavascript } from "react-icons/di";
import { FaAngular } from "react-icons/fa";

export const PROJECTS = [
  {
    id: "project-1",
    title: "Personal Portfolio",
    github: "https://github.com/Sol-Zito",
    link: "",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "icon-3",
        icon: DiJavascript,
        name: "Javascript",
      },
      {
        id: "icon-4",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "icon-5",
        icon: SiVite,
        name: "Vite",
      },
    ],
  },
  {
    id: "project-2",
    title: "Salud Dentist",
    github: "https://github.com/Sol-Zito/ecommerce-sz.git",
    link: "https://salud-dentist-solzitos-projects.vercel.app",
    image: salud,
    content: "Website where you can access the doctors at the dental clinic.",
    stack: [
      {
        id: "icon-3",
        icon: DiJavascript,
        name: "Javascript",
      },
      {
        id: "icon-4",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "icon-5",
        icon: DiHtml5,
        name: "HTML",
      },
    ],
  },
  {
    id: "project-101",
    title: "Inventario",
    github: "https://github.com/Sol-Zito/InventaryFrontEnd.git",
    link: "",
    image: bookmark,
    content:
      "Product inventory. Worked with Angular on the frontend and Java with Spring Boot for the backend.",
    stack: [
      {
        id: "icon-1",
        icon: FaAngular,
        name: "Angular",
      },
      {
        id: "icon-2",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "icon-3",
        icon: SiSpringboot,
        name: "Spring boot",
      },
    ],
  },
  {
    id: "project-5",
    title: "Bank",
    github: "https://sudhanva-nadiger.github.io/Modern_Bank_App/index.html",
    link: "https://sudhanva-nadiger.github.io/Modern_Bank_App/index.html",
    image: bank,
    content:
      "A landing page for a bank with modern UI/UX using React and Tailwind.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    id: "project-3",
    title: "Keep Notes",
    github: "https://github.com/Sol-Zito/ListaDeTareas.git",
    link: "",
    image: keepNotes,
    content:
      "A progressive note taking application developed using React and CSS. ",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTypescript,
        name: "Typescript",
      },
      {
        id: "icon-3",
        icon: SiHtml5,
        name: "Html",
      },
      {
        id: "icon-4",
        icon: SiCss3,
        name: "CSS",
      },
    ],
  },
  {
    id: "project-4",
    title: "Movies",
    github: "https://github.com/Sol-Zito/movieWithReact.git",
    link: "",
    image: movieLand,
    content:
      "A web application that easily provides guidance about any Movies & Tv shows.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-4",
        icon: DiJavascript,
        name: "Javascript",
      },
      {
        id: "icon-6",
        icon: SiHtml5,
        name: "Html",
      },
      {
        id: "icon-5",
        icon: SiCss3,
        name: "CSS",
      },
    ],
  },
];
