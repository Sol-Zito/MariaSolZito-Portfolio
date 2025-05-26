import { AiFillGithub } from "react-icons/ai";
import { BsFileExcel } from "react-icons/bs";
import { DiVisualstudio } from "react-icons/di";
import { FaJava, FaNodeJs } from "react-icons/fa";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiFigma,
  SiGit,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiJquery,
  SiMaterialdesign,
  SiMysql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

export const SKILLS_LIST = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiJavascript,
        name: "Javascript",
      },
      {
        id: "pl-2",
        icon: SiTypescript,
        name: "Typescript",
      },
      {
        id: "pl-3",
        icon: FaJava,
        name: "JAVA",
      },
      {
        id: "pl-4",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-5",
        icon: FaNodeJs,
        name: "Node.js",
      },
      {
        id: "pl-6",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "pl-7",
        icon: TbSql,
        name: "SQL Server",
      },
      {
        id: "pl-8",
        icon: SiHtml5,
        name: "Html",
      },
      {
        id: "pl-9",
        icon: SiCss3,
        name: "Css",
      },
    ],
  },
  {
    title: "Frameworks/ Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "f-2",
        icon: SiAngular,
        name: "Angular",
      },
      {
        id: "f-3",
        icon: SiRedux,
        name: "Redux",
      },
      {
        id: "f-4",
        icon: RiNextjsLine,
        name: "Next.js",
      },
      {
        id: "f-5",
        icon: SiMaterialdesign,
        name: "Material UI",
      },
      {
        id: "f-6",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-7",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-8",
        icon: SiSpringboot,
        name: "SpringBoot",
      },
      {
        id: "f-9",
        icon: SiJquery,
        name: "jQuery",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiFigma,
        name: "Figma",
      },
      {
        id: "t-2",
        icon: DiVisualstudio,
        name: "VS Code",
      },
      {
        id: "t-3",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-4",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "pl-6",
        icon: BsFileExcel,
        name: "Excel",
      },
      {
        id: "pl-7",
        icon: PiMicrosoftPowerpointLogo,
        name: "Power Bi",
      },
      {
        id: "t-8",
        icon: SiIntellijidea,
        name: "IntelliJ",
      },
      {
        id: "t-9",
        icon: SiPostman,
        name: "Postman",
      },
    ],
  },
];
