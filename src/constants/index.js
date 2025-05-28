import animada from "../assets/images/Hero/animada1.png";

export { SOCIAL_MEDIA } from "./socialMedia";
export { SKILLS_LIST } from "./skillsList";
export { EXPERIENCES } from "./experience";
export { EDUCATION_LIST } from "./education";
export { PROJECTS } from "./projects";
export { COURSES } from "./courses";

export const RESUME_LINK =
  "https://drive.google.com/file/d/1S5OTmCQXCoCClmp7wliKIhSiK1OA_DKa/view";

export const CONTENT = {
  navs: [
    {
      link: "#skills",
      title: "Skills & Experience",
    },
    {
      link: "#education",
      title: "Education",
    },
    {
      link: "#Courses",
      title: "Courses",
    },
    {
      link: "#projects",
      title: "Projects",
    },
    {
      link: "#contact",
      title: "Contact Me",
    },
  ],
  hero: {
    title: `Hi,`,
    sub1: "I'm",
    firstName: "MARIA SOL",
    LastName: "ZITO",
    image: animada,
    hero_content: [
      {
        count: "",
        text: "Developer based in Argentina. Software Development Engineer.",
      },
    ],
  },
  Footer: {
    text: "Made with ❤️ ©2025",
  },
};

export const ABOUT_ME = {
  name: "Maria Sol Zito",
  tagLine: "FullStack Developer | Data Analyst ",
  intro: CONTENT.hero.hero_content.text,
};
