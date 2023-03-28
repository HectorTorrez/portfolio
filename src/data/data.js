import { BiLinkExternal, DiJavascript1, FiGithub, FiLinkedin } from 'react-icons/all'
import { AiFillHtml5 } from 'react-icons/all'
import { DiCss3 } from 'react-icons/all'
import { FaReact } from 'react-icons/all'

export const skills = [

  {
    icon: DiJavascript1, color: '#F7DF1E'
  },
  {
    icon: AiFillHtml5, color: '#E34F26'
  },
  {
    icon: DiCss3, color: '#1572B6'
  },
  {
    icon: FaReact, color: '#61DAFB'
  }
]

export const socials = [
  {
    icon: FiGithub, source: 'https://github.com/HectorTorrez', name: 'Github'
  },
  {
    icon: FiLinkedin, source: 'https://www.linkedin.com/in/%F0%9F%9A%80-hector-torrez-75a40a20b/', name: 'Linkedin'
  },
]

export const projects = [
  {
    title: 'Anime list',
    description: 'This project starts with the idea of creating a web application to manage a list of anime.',
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
    title: 'Todo List',
    description: 'This project is a simple todo list, where you can add and delete.',
    demo: 'https://hectortorrez.github.io/react-tasks/',
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
    source: 'https://github.com/HectorTorrez/react-tasks',
    sourceIcon: BiLinkExternal,
  },
  {
    title: 'Patient Manager',
    description: 'This is a patient listing application, where you can create, edit and delete.',
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
    title: 'Marketing Website',
    description: 'It is a website designed to promote and sell products or services..',
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
  }

]

