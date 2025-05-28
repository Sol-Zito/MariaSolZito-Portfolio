import {
  SiAdobe,
  SiCss3,
  SiGithub,
  SiGooglefonts,
  SiHtml5,
  SiMaterialdesign,
  SiNextdotjs,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import acm from "../assets/images/Experience/acm.png";
import tigre from "../assets/images/Experience/tigre.png";
import Bytech from "../assets/images/Experience/Bytech.png";
import flipkart from "../assets/images/Experience/flipkart.png";
import elviejotango from "../assets/images/Experience/elviejotango.png";
import { FiFigma } from "react-icons/fi";
import {
  DiIntellij,
  DiJava,
  DiJavascript,
  DiMysql,
  DiVisualstudio,
} from "react-icons/di";
import { BsBootstrap, BsTrello } from "react-icons/bs";
import { FaFontAwesome } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";

export const EXPERIENCES = [
  {
    organisation: "El Viejo Tango",
    logo: elviejotango,
    link: "https://www.figma.com/design/SgxWRybyqRGQQ2IUUiJqZv/KioscoStock?node-id=0-1&p=f&t=3RFXLxMRTIAAhuGh-0",
    positions: [
      {
        title: "Designer UX/UI",
        duration: "April 2025 - current",
        content: [
          {
            text: "I have worked on optimizing the digital experience for a client located in Argentina. For this client, I have Created initial layouts to define the interface architecture. Applied styles, colors, and graphic components aligned with the client's brand identity. Evaluated the user experience through testing and ongoing adjustments. For the development of the project, I used specialized tools such as Figma, Adobe Colors, and other essential tools for digital experience design. The methodology adopted was agile, allowing for rapid iterations and continuous improvements based on client and end-user feedback.",
            link: "https://www.figma.com/design/SgxWRybyqRGQQ2IUUiJqZv/KioscoStock?node-id=0-1&p=f&t=3RFXLxMRTIAAhuGh-0",
            tech: [
              {
                id: "f-1",
                icon: FiFigma,
                name: "Figma",
              },
              {
                id: "f-2",
                icon: SiAdobe,
                name: "Adobe Colors",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    organisation: "ByTech",
    logo: Bytech,
    link: "https://github.com/No-Country-simulation/c21-67-t-python-react.git",
    positions: [
      {
        title: "Front End Developer & Designer UX/UI",
        duration: "Sep 2024 - Nov 2024",
        content: [
          {
            text: "Worked for a technology ecommerce client located in Argentina For this client I have Interface design with Figma, defining color palettes, logos and fonts. Development of a website with fluid user experience and reusable components.",
            link: "https://github.com/No-Country-simulation/c21-67-t-python-react.git",
            tech: [
              {
                id: "f-1",
                icon: SiReact,
                name: "ReactJS",
              },
              {
                id: "f-2",
                icon: SiTypescript,
                name: "TypeScript",
              },
              {
                id: "f-3",
                icon: SiTailwindcss,
                name: "Tailwind",
              },
              {
                id: "f-4",
                icon: FiFigma,
                name: "Figma",
              },
              {
                id: "f-5",
                icon: SiAdobe,
                name: "Adobe Colors",
              },
              {
                id: "f-6",
                icon: SiGithub,
                name: "GitHub",
              },
              {
                id: "f-7",
                icon: DiVisualstudio,
                name: "VS Code",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    organisation: "Vinoteca",
    logo: flipkart,
    link: "https://github.com/VinoVivo/VinoVivo-Frontend.git",
    positions: [
      {
        title: "Front End Developer",
        duration: "May 2024 - Aug 2024",
        content: [
          {
            text: "Worked for a Wine cellar client located in Argentina For this client I have Use Figma to design the interface, defining color palettes, logo, typography, and structure. Develop a website where it offers a fluid user experience; Create reusable components, with a responsive design to adapt to different devices. To ensure the security of customer data, Keycloak was used. Work on  customizing each component and page of it so that it integrates perfectly with the website.",
            link: "https://github.com/VinoVivo/VinoVivo-Frontend.git",
            tech: [
              {
                id: "f-1",
                icon: SiNextdotjs,
                name: "Next.js",
              },
              {
                id: "f-2",
                icon: SiTypescript,
                name: "TypeScript",
              },
              {
                id: "f-3",
                icon: SiTailwindcss,
                name: "Tailwind Css",
              },
              {
                id: "f-5",
                icon: FiFigma,
                name: "Figma",
              },
              {
                id: "f-4",
                icon: SiTailwindcss,
                name: "Shandcn",
              },
              {
                id: "f-6",
                icon: SiGithub,
                name: "GitHub",
              },
              {
                id: "f-7",
                icon: DiVisualstudio,
                name: "VS Code",
              },
              {
                id: "f-8",
                icon: "",
                name: "Keycloak",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    organisation: "Tourism Blog",
    logo: tigre,
    link: "https://github.com/Sol-Zito/Blog-de-Tigre.git",
    positions: [
      {
        title: "Front End Developer & Designer UX/UI",
        duration: "Apr 2024 - June 2024",
        content: [
          {
            text: "Worked for a tourism blog in Argentina For this client I have  I designed the initial blog layout, defining the structure of the pages and the layout of the topics. I considered how to organize the information so that users can easily navigate and at the same time, it is visually appealing and easy to read. I worked with a color palette inspired by the vibrant culture of Buenos Aires and we selected a typography that reflects the elegance and passion of the city. I implemented validations for forms, making sure that users can communicate effectively.",
            link: "https://github.com/Sol-Zito/Blog-de-Tigre.git",
            tech: [
              {
                id: "f-1",
                icon: SiHtml5,
                name: "Html5",
              },
              {
                id: "f-2",
                icon: SiCss3,
                name: "Css",
              },
              {
                id: "f-3",
                icon: DiJavascript,
                name: "Javascript",
              },
              {
                id: "f-4",
                icon: BsBootstrap,
                name: "Bootstrap",
              },
              {
                id: "f-5",
                icon: FiFigma,
                name: "Figma",
              },
              {
                id: "f-6",
                icon: SiAdobe,
                name: "Adobe colors",
              },
              {
                id: "f-7",
                icon: SiGooglefonts,
                name: "Google fonts",
              },
              {
                id: "f-8",
                icon: SiGithub,
                name: "GitHub",
              },
              {
                id: "f-9",
                icon: FaFontAwesome,
                name: "FontAwesome",
              },
              {
                id: "f-10",
                icon: BsTrello,
                name: "Trello",
              },
              {
                id: "f-11",
                icon: DiVisualstudio,
                name: "VS Code",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    organisation: "Digital booking",
    logo: acm,
    link: "https://github.com/Sol-Zito/intrumentosMusicales.git",
    positions: [
      {
        title: "Full Stack Developer",
        duration: "May 2023 - July 2023",
        content: [
          {
            text: "Worked for an instrument ecommerce. For this client I have I established a color scheme and logo that reflects the harmony and diversity of the instruments. The application structure was carefully planned to offer intuitive navigation and a pleasant experience for users. I implemented a CRUD system to manage the available instruments. I developed components to display the rating of each instrument. I created validations for the rental forms, ensuring that users provide accurate information. I designed a calendar structure so that customers could easily select rental dates. I implemented search filters so that users could quickly find the instruments they needed",
            link: "https://github.com/Sol-Zito/intrumentosMusicales.git",
            tech: [
              {
                id: "f-1",
                icon: SiReact,
                name: "React JS",
              },
              {
                id: "f-2",
                icon: BiCalendar,
                name: "React-calendar",
              },
              {
                id: "f-3",
                icon: FiFigma,
                name: "Figma",
              },
              {
                id: "f-4",
                icon: SiMaterialdesign,
                name: "Material UI",
              },
              {
                id: "f-5",
                icon: FaFontAwesome,
                name: "Font Awesome",
              },
              {
                id: "f-6",
                icon: DiVisualstudio,
                name: "VS Code",
              },
              {
                id: "f-7",
                icon: BsTrello,
                name: "Trello",
              },
              {
                id: "f-8",
                icon: DiJava,
                name: "Java",
              },
              {
                id: "f-9",
                icon: SiSpringboot,
                name: "Spring Boot",
              },
              { id: "f-10", icon: DiIntellij, name: "IntelliJ" },
              {
                id: "f-11",
                icon: DiMysql,
                name: "MySql",
              },
            ],
          },
        ],
      },
    ],
  },
];
