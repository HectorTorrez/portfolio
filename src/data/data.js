import { BiLinkExternal } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiFirebase, SiSupabase, SiTailwindcss } from "react-icons/si";
// import { SiClerk } from "react-icons/si";
import {
  TbBrandCypress,
  TbBrandNextjs,
  TbBrandRedux,
  TbBrandTypescript,
} from "react-icons/tb";
import { BiLogoNodejs } from "react-icons/bi";
import { SiExpress, SiMongoose, SiMongodb, SiJest } from "react-icons/si";

export const skills = [
  {
    frontend: [
      {
        icon: DiJavascript1,
        color: "#F7DF1E",
      },
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: TbBrandTypescript,
        color: "#3178C6",
      },
      {
        icon: DiCss3,
        color: "#1572B6",
      },
      {
        icon: TbBrandNextjs,
        color: "#fff",
      },
      {
        icon: TbBrandRedux,
        color: "#764ABC",
      },
      {
        icon: SiTailwindcss,
        color: "#38B2AC",
      },
      // {
      //   icon: AiFillHtml5,
      //   color: "#E34F26",
      // },
    ],
    backend: [
      {
        icon: BiLogoNodejs,
        color: "#3ECF8E",
      },
      {
        icon: SiExpress,
        color: "#3ECF8E",
      },
      {
        icon: SiMongodb,
        color: "#3ECF8E",
      },
      {
        icon: SiMongoose,
        color: "#880000",
      },
      {
        icon: SiSupabase,
        color: "#3ECF8E",
      },
    ],

    testing: [
      {
        icon: SiJest,
        color: "#C21325",
      },
      {
        icon: TbBrandCypress,
        color: "#ffffff",
      },
    ],
  },
];

export const socials = [
  {
    icon: FiGithub,
    source: "https://github.com/HectorTorrez",
    name: "Github",
  },
  {
    icon: FiLinkedin,
    source: "https://www.linkedin.com/in/hector-torrez/",
    name: "Linkedin",
  },
];

export const projects = [
  {
    title: "GymLog",
    titleES: "GymLog",
    image:
      "https://github.com/HectorTorrez/gym-log-landing-page/assets/69362017/fb520233-3b74-4422-9c5f-21debb37306b",
    description:
      "This project is a log of exercises, where you can add, edit and delete to keep track of your workouts. I used Next.js, Tailwind CSS, shadcn, Supabase, Clerk. The link is the landing page.",
    descriptionES:
      "Este proyecto es un registro de ejercicios, donde puedes agregar, editar y eliminar para llevar un seguimiento de tus entrenamientos. Utilicé Next.js, Tailwind CSS, shadcn, Supabase, Clerk. El enlace es landing page.",
    demo: "https://gym-log-landing-page.vercel.app/",
    demoIcon: FiGithub,
    tags: [
      {
        icon: TbBrandTypescript,
        color: "#3178C6",
      },
      // {
      //   icon: SiClerk,
      //   color: "#3ECF8E",
      // },

      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: SiTailwindcss,
        color: "#38B2AC",
      },
      {
        icon: SiSupabase,
        color: "#3ECF8E",
      },
      {
        icon: TbBrandNextjs,
        color: "#fff",
      },
      // {
      //   icon: SiShadcnui,
      //   color: "#000",
      // },
    ],
    source: "https://github.com/HectorTorrez/gym-log",
    sourceIcon: BiLinkExternal,
  },
  {
    title: "Translate App",
    titleES: "Aplicación de Traducción",
    image:
      "https://github.com/HectorTorrez/translate-app/assets/69362017/06276740-6287-405a-b95b-bb779022cf56",
    description:
      "This project is a translation application, where you can translate text to different languages. I used React, Tailwind CSS, and Translate API.",
    descriptionES:
      "Este proyecto es una aplicación de traducción, donde puedes traducir texto a diferentes idiomas. Utilicé React, Tailwind CSS y Translate API.",
    demo: "https://translate-app-five.vercel.app/",
    demoIcon: FiGithub,
    tags: [
      {
        icon: DiJavascript1,
        color: "#F7DF1E",
      },
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: SiTailwindcss,
        color: "#38B2AC",
      },
    ],
    source: "https://github.com/HectorTorrez/translate-app",
    sourceIcon: BiLinkExternal,
  },
  {
    title: "Blog",
    titleES: "Blog",
    image:
      "https://github.com/HectorTorrez/blog-frontend/assets/69362017/6097b58b-c5e7-4c5e-a44a-fa0149f01367",
    description:
      "This project is a blog, where you can add, edit and delete posts. I used React, Node.js, Express, MongoDB.",
    descriptionES:
      "Este proyecto es un blog, donde puedes agregar, editar y eliminar posts. Utilicé React, Node.js, Express, MongoDB.",
    demo: "https://blog-ht.netlify.app/",
    demoIcon: FiGithub,
    tags: [
      {
        icon: TbBrandTypescript,
        color: "#3178C6",
      },
      {
        icon: DiJavascript1,
        color: "#F7DF1E",
      },
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: SiTailwindcss,
        color: "#38B2AC",
      },
      {
        icon: BiLogoNodejs,
        color: "#3ECF8E",
      },
      {
        icon: SiExpress,
        color: "#3ECF8E",
      },
      {
        icon: SiMongodb,
        color: "#3ECF8E",
      },
      {
        icon: SiJest,
        color: "#C21325",
      },
      {
        icon: TbBrandCypress,
        color: "#ffffff",
      },
    ],
    source: "https://github.com/HectorTorrez/blog-frontend",
    sourceIcon: BiLinkExternal,
  },
  {
    title: "Market Place",
    titleES: "Market Place",
    image: "https://drive.google.com/uc?id=1OMX0a0RzwtNMq-zM9NiMv5R3FlIEltjV",
    description:
      "This project is a market place, where you can add, edit and delete products. I used React, Redux and Supabase.",
    descriptionES:
      "Este proyecto es un market place, donde puedes agregar, editar y eliminar productos. Utilicé React, Redux y Supabase.",
    demo: "https://marketplace-ht.netlify.app/",
    demoIcon: FiGithub,
    tags: [
      {
        icon: TbBrandTypescript,
        color: "#3178C6",
      },
      {
        icon: DiJavascript1,
        color: "#F7DF1E",
      },
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: TbBrandRedux,
        color: "#764ABC",
      },
      {
        icon: SiSupabase,
        color: "#3ECF8E",
      },
      {
        icon: SiTailwindcss,
        color: "#38B2AC",
      },
    ],
    source: "https://github.com/HectorTorrez/marketPlace",
    sourceIcon: BiLinkExternal,
  },
  //   {
  //  title: 'Fitlog',
  //     titleES: 'Notas de Ejercicios',
  //     description: 'This project is a log of exercises, where you can add, edit and delete. I used React and Firebase.',
  //     descriptionES: 'Este proyecto es un registro de ejercicios, donde puedes agregar, editar y eliminar. Utilicé React y Firebase.',
  //     demo: 'https://fitlog-ht.netlify.app/',
  //     demoIcon: FiGithub,
  //     tags: [
  //       {
  //         icon: DiJavascript1, color: '#F7DF1E'
  //       },
  //       {
  //         icon: FaReact, color: '#61DAFB'
  //       },
  //       {
  //         icon: SiFirebase, color: '#FFCA28'
  //       },
  //       {
  //         icon: SiTailwindcss, color: '#38B2AC'
  //       },
  //     ],
  //     source: 'https://github.com/HectorTorrez/FitLog',
  //     sourceIcon: BiLinkExternal,
  //   },
  {
    title: "ShoppingCart",
    titleES: "Carrito de Compra",
    image:
      "https://github.com/HectorTorrez/ShoppingCart/assets/69362017/7365cf19-980b-446c-bc7b-2cbd4a3ae41d",
    description: "It is a website designed to promote and sell products.",
    descriptionES:
      "Es una página web diseñada para promocionar la venta de productos",
    demo: "https://shoppingcart-ts01.netlify.app/",
    demoIcon: FiGithub,
    tags: [
      {
        icon: DiJavascript1,
        color: "#F7DF1E",
      },
      {
        icon: TbBrandTypescript,
        color: "#3178C6",
      },
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: SiTailwindcss,
        color: "#38B2AC",
      },
    ],
    source: "https://github.com/HectorTorrez/marketing-website",
    sourceIcon: BiLinkExternal,
  },

  // {
  //   title: 'Quac',
  //   titleES: 'Quac',
  //   description: 'This project starts with the idea of creating a social media to write and share your thoughts. ',
  //   descriptionES: 'Este proyecto empieza con la idea de crear una red social para escribir y compartir tus pensamientos.',
  //   demo: 'https://quac.netlify.app/',
  //   demoIcon: FiGithub,
  //   tags: [
  //     {
  //       icon: DiJavascript1, color: '#F7DF1E'
  //     },
  //     {
  //       icon: FaReact, color: '#61DAFB'
  //     },
  //     {
  //       icon: SiFirebase, color: '#FFCA28'
  //     },
  //     {
  //       icon: SiTailwindcss, color: '#38B2AC'
  //     },
  //   ],
  //   source: 'https://github.com/HectorTorrez/Quac',
  //   sourceIcon: BiLinkExternal,
  // },
  // {
  //   title: 'Shopping Website',
  //   titleES: 'Carrito de Compra',
  //   description: 'It is a website designed to promote and sell products.',
  //   descriptionES: 'Es una página web diseñada para promocionar la venta de productos',
  //   demo: 'https://serene-paprenjak-31dcf5.netlify.app/',
  //   demoIcon: FiGithub,
  //   tags: [
  //     {
  //       icon: DiJavascript1, color: '#F7DF1E'
  //     },
  //     {
  //       icon: FaReact, color: '#61DAFB'
  //     },
  //     {
  //       icon: DiCss3, color: '#1572B6'
  //     },
  //   ],
  //   source: 'https://github.com/HectorTorrez/marketing-website',
  //   sourceIcon: BiLinkExternal,
  // },
  {
    title: "Realtime Chat",
    image:
      "https://github.com/HectorTorrez/realtime-chat/assets/69362017/e78ff814-9843-4b70-9b11-1ce36556a995",
    titleES: "Chat en Tiempo Real",
    description:
      "This project is a realtime chat, where you can create a room and chat with your friends.",
    descriptionES:
      "Es un chat en tiempo real, donde puedes crear una sala y chatear con tus amigos.",
    demo: "https://realtime-chat-ht.netlify.app/",
    demoIcon: FiGithub,
    tags: [
      {
        icon: DiJavascript1,
        color: "#F7DF1E",
      },
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: SiFirebase,
        color: "#FFCA28",
      },
      {
        icon: SiTailwindcss,
        color: "#38B2AC",
      },
    ],
    source: "https://github.com/HectorTorrez/realtime-chat",
    sourceIcon: BiLinkExternal,
  },
  {
    title: "Patient Manager",
    titleES: "Administrador de Pacientes",
    image:
      "https://github.com/HectorTorrez/Patient-Manager/assets/69362017/e816c29f-7ab9-467e-a0bc-36df999770a7",
    description:
      "This is a patient listing application, where you can create, edit and delete.",
    descriptionES:
      "Esta es una aplicación de listado de paciente, donde tú puedes crear, editar y eliminar.",
    demo: "https://main--aesthetic-starship-355674.netlify.app/",
    demoIcon: FiGithub,
    tags: [
      {
        icon: DiJavascript1,
        color: "#F7DF1E",
      },
      {
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        icon: DiCss3,
        color: "#1572B6",
      },
    ],
    source: "https://github.com/HectorTorrez/Patient-Manager",
    sourceIcon: BiLinkExternal,
  },
  // {
  //   title: "Anime list",
  //   titleES: "Lista de Anime",
  //   image:
  //     "https://github.com/HectorTorrez/anime-list/assets/69362017/244b116b-d817-48af-97a2-a83ba576ac6d",
  //   description:
  //     "This project starts with the idea of creating a web application to manage a list of anime.",
  //   descriptionES:
  //     "Este proyecto empieza con la idea de crear una web para gestionar una lista de anime",
  //   demo: "https://anime-list00.netlify.app/",
  //   demoIcon: FiGithub,
  //   tags: [
  //     {
  //       icon: DiJavascript1,
  //       color: "#F7DF1E",
  //     },
  //     {
  //       icon: FaReact,
  //       color: "#61DAFB",
  //     },
  //     {
  //       icon: DiCss3,
  //       color: "#1572B6",
  //     },
  //   ],
  //   source: "https://github.com/HectorTorrez/anime-list",
  //   sourceIcon: BiLinkExternal,
  // },
  // {
  //   title: "Todo List",
  //   titleES: "Administrador de Tareas",
  //   image:
  //     "https://github.com/HectorTorrez/TodoList-Typescript/assets/69362017/66a7a643-aca2-4dbe-a7f4-dee8f5e6a72d",
  //   description:
  //     "This project is a simple todo list, where you can add and delete.",
  //   descriptionES:
  //     "Es un simple administrador de tareas, donde puedes agregar y eliminar.",
  //   demo: "https://todolistty.netlify.app",
  //   demoIcon: FiGithub,
  //   tags: [
  //     {
  //       icon: FaReact,
  //       color: "#61DAFB",
  //     },
  //     {
  //       icon: TbBrandTypescript,
  //       color: "#3178C6",
  //     },
  //     {
  //       icon: DiCss3,
  //       color: "#1572B6",
  //     },
  //   ],
  //   source: "https://github.com/HectorTorrez/TodoList-Typescript",
  //   sourceIcon: BiLinkExternal,
  // },
];
