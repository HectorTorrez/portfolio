
import{BiLinkExternal} from 'react-icons/bi'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiJavascript1} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {FiGithub, FiLinkedin} from 'react-icons/fi'
import {SiFirebase, SiSupabase, SiTailwindcss} from 'react-icons/si'
import {TbBrandRedux, TbBrandTypescript} from 'react-icons/tb'
import {BiLogoNodejs} from 'react-icons/bi'
import {SiExpress, SiMongoose, SiMongodb, SiJest} from 'react-icons/si'

export const skills = [

  {
    frontend: [
      {
        icon: DiJavascript1, color: '#F7DF1E'
      },
      {
          icon: FaReact, color: '#61DAFB'
      },
      {
          icon: TbBrandTypescript, color: '#3178C6'
      },
      {
        icon: DiCss3, color: '#1572B6'
      },
      {
       icon: TbBrandRedux, color: '#764ABC'
      },
      {
        icon: SiTailwindcss, color: '#38B2AC'
      },
      {
        icon: AiFillHtml5, color: '#E34F26'
      },
    ],
    backend: [
    {
    icon: BiLogoNodejs, color: '#3ECF8E'
    },
    {
        icon: SiExpress, color: '#3ECF8E'
    },    
    {
      icon: SiMongodb, color: '#3ECF8E'
    },
    {
      icon: SiMongoose, color: '#880000'
    },
  {
    icon: SiSupabase, color: '#3ECF8E'
  }, 
    
    ],

    testing: [
      {
        icon: SiJest, color: '#C21325'
      }, 
    ]
  } 

  // {
  //   icon: DiJavascript1, color: '#F7DF1E'
  // },
  // {
  //   icon: TbBrandTypescript, color: '#3178C6'
  // },
  // {
  //   icon: AiFillHtml5, color: '#E34F26'
  // },
  // {
  //   icon: DiCss3, color: '#1572B6'
  // },
  // {
  //   icon: FaReact, color: '#61DAFB'
  // },
  // {
  //   icon: TbBrandRedux, color: '#764ABC'
  // },
  // {
  //   icon: SiSupabase, color: '#3ECF8E'
  // },
  // {
  //   icon: SiFirebase, color: '#FFCA28'
  // }
  

]

export const socials = [
  {
    icon: FiGithub, source: 'https://github.com/HectorTorrez', name: 'Github'
  },
  {
    icon: FiLinkedin, source: 'https://www.linkedin.com/in/hector-torrez/', name: 'Linkedin'
  },
]

export const projects = [
  {
    title: 'Market Place',
       titleES: 'Market Place',
       description: 'This project is a market place, where you can add, edit and delete products. I used React, Redux and Supabase.',
       descriptionES: 'Este proyecto es un market place, donde puedes agregar, editar y eliminar productos. Utilicé React, Redux y Supabase.',
       demo: 'https://marketplace-ht.netlify.app/',
       demoIcon: FiGithub,
       tags: [
         {
          icon: TbBrandTypescript, color: '#3178C6'
         },
         {
           icon: FaReact, color: '#61DAFB'
         },
         {
          icon: TbBrandRedux, color: '#764ABC'
        },
         {
           icon: SiSupabase, color: '#3ECF8E'
         },
         {
           icon: SiTailwindcss, color: '#38B2AC'
         },
       ],
       source: 'https://github.com/HectorTorrez/marketPlace',
       sourceIcon: BiLinkExternal,
     },
  {
 title: 'Fitlog',
    titleES: 'Notas de Ejercicios',
    description: 'This project is a log of exercises, where you can add, edit and delete. I used React and Firebase.',
    descriptionES: 'Este proyecto es un registro de ejercicios, donde puedes agregar, editar y eliminar. Utilicé React y Firebase.',
    demo: 'https://fitlog-ht.netlify.app/',
    demoIcon: FiGithub,
    tags: [
      {
        icon: DiJavascript1, color: '#F7DF1E'
      },
      {
        icon: FaReact, color: '#61DAFB'
      },
      {
        icon: SiFirebase, color: '#FFCA28'
      },
      {
        icon: SiTailwindcss, color: '#38B2AC'
      },
    ],
    source: 'https://github.com/HectorTorrez/FitLog',
    sourceIcon: BiLinkExternal,
  },
  {
    title: 'Shopping Website',
    titleES: 'Carrito de Compra',
    description: 'It is a website designed to promote and sell products.',
    descriptionES: 'Es una página web diseñada para promocionar la venta de productos',
    demo: 'https://serene-paprenjak-31dcf5.netlify.app/',
    demoIcon: FiGithub,
    tags: [
      {
        icon: DiJavascript1, color: '#F7DF1E'
      },
      {
        icon: FaReact, color: '#61DAFB'
      },
      {
        icon: DiCss3, color: '#1572B6'
      },
    ],
    source: 'https://github.com/HectorTorrez/marketing-website',
    sourceIcon: BiLinkExternal,
  },
  {
    title: 'Quac',
    titleES: 'Quac',
    description: 'This project starts with the idea of creating a social media to write and share your thoughts. ',
    descriptionES: 'Este proyecto empieza con la idea de crear una red social para escribir y compartir tus pensamientos.',
    demo: 'https://quac.netlify.app/',
    demoIcon: FiGithub,
    tags: [
      {
        icon: DiJavascript1, color: '#F7DF1E'
      },
      {
        icon: FaReact, color: '#61DAFB'
      },
      {
        icon: SiFirebase, color: '#FFCA28'
      },
      {
        icon: SiTailwindcss, color: '#38B2AC'
      },
    ],
    source: 'https://github.com/HectorTorrez/Quac',
    sourceIcon: BiLinkExternal,
  },
  {
    title: 'Anime list',
    titleES: 'Lista de Anime',
    description: 'This project starts with the idea of creating a web application to manage a list of anime.',
    descriptionES: 'Este proyecto empieza con la idea de crear una web para gestionar una lista de anime',
    demo: 'https://anime-list00.netlify.app/',
    demoIcon: FiGithub,
    tags: [
      {
        icon: DiJavascript1, color: '#F7DF1E'
      },
      {
        icon: FaReact, color: '#61DAFB'
      },
      {
        icon: DiCss3, color: '#1572B6'
      },
    ],
    source: 'https://github.com/HectorTorrez/anime-list',
    sourceIcon: BiLinkExternal,
  },
  {
    title: 'Patient Manager',
    titleES: 'Administrador de Pacientes',
    description: 'This is a patient listing application, where you can create, edit and delete.',
    descriptionES: 'Esta es una aplicación de listado de paciente, donde tú puedes crear, editar y eliminar.',
    demo: 'https://main--aesthetic-starship-355674.netlify.app/',
    demoIcon: FiGithub,
    tags: [
      {
        icon: DiJavascript1, color: '#F7DF1E'
      },
      {
        icon: FaReact, color: '#61DAFB'
      },
      {
        icon: DiCss3, color: '#1572B6'
      },
    ],
    source: 'https://github.com/HectorTorrez/Patient-Manager',
    sourceIcon: BiLinkExternal,
  },
  {
    title: 'Realtime Chat',
    titleES: 'Chat en Tiempo Real',
    description: 'This project is a realtime chat, where you can create a room and chat with your friends.',
    descriptionES: 'Es un chat en tiempo real, donde puedes crear una sala y chatear con tus amigos.',
    demo: 'https://realtime-chat-ht.netlify.app/',
    demoIcon: FiGithub,
    tags: [
      {
        icon: DiJavascript1, color: '#F7DF1E'
      },
      {
        icon: FaReact, color: '#61DAFB'
      },
      {
        icon: SiFirebase, color: '#FFCA28'
      },
      {
        icon: SiTailwindcss, color: '#38B2AC'
      },
    ],
    source: 'https://github.com/HectorTorrez/realtime-chat',
    sourceIcon: BiLinkExternal,
  },
  {
    title: 'Todo List',
    titleES: 'Administrador de Tareas',
    description: 'This project is a simple todo list, where you can add and delete.',
    descriptionES: 'Es un simple administrador de tareas, donde puedes agregar y eliminar.',
    demo: 'https://todolistty.netlify.app',
    demoIcon: FiGithub,
    tags: [
     
      {
        icon: FaReact, color: '#61DAFB'
      },
      {
        icon: TbBrandTypescript, color: '#3178C6'
      },
      {
        icon: DiCss3, color: '#1572B6'
      },
    ],
    source: 'https://github.com/HectorTorrez/TodoList-Typescript',
    sourceIcon: BiLinkExternal,
  },

]


