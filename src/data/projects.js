import  rollDice from '../assets/pro-img/rollDice.jpg'
import  weatherImg from '../assets/pro-img/weather.jpg'
import  toDolist from '../assets/pro-img/todo.jpg'
import  filmS from '../assets/pro-img/filmS.jpg'
import  palindrome from '../assets/pro-img/palindrome.jpg'
import  pokemon from '../assets/pro-img/pokemon.jpg'
import  tenzies from '../assets/pro-img/tenzies.jpg'
import taskManager from '../assets/pro-img/taskManager.jpg'


const projectsData = [
  
  {
  category: "react",
  image: {
    src: tenzies,
    alt: "tenzies",
    style: "object-fit: cover;"
  },
  links: [
    { href: "https://tenzies-01.netlify.app", text: "Live Demo" },
    { href: "https://github.com/ehsan05/tenzies ", text: "Source Code" }
  ],
  icon: "fas fa-dice",
  title: "Tenzies Game",
  description: "Tenzies Game with React.js ",
  tech: ["React.js", "JavaScript","CSS"]
  },

  {
    category: "nodeExpress",
    image: {
      src: taskManager,
      alt: "task-manager",
      style: "object-fit: contain;"
    },
    links: [
      { href: "https://task-manager-rhl0.onrender.com", text: "Live Demo" },
      { href: "https://github.com/ehsan05/Task-manager ", text: "Source Code" }
    ],
    icon: "fa-solid fa-list-check",
    title: "Task Manager",
    description: "Organize, track, and complete your tasks with ease",
    tech: ["Node & Express", "MongoDB", "Full-stack-app"]
  },

  {
    category: "javacsript",
    image: {
      src: pokemon,
      alt: "pokemon",
      style: "object-fit: contain;"
    },
    links: [
      { href: "https://pokemon-searching-app-00.netlify.app", text: "Live Demo" },
      { href: "https://github.com/ehsan05/pokemon-search-app", text: "Source Code" }
    ],
    icon: "fas fa-search",
    title: "Search Pokémon",
    description: "Find any Pokémon by name or Pokédex number.",
    tech: ["JavaScript","API", "CSS"]
  },

  {
    category: "javacsript",
    image: {
      src: filmS,
      alt: "movei-search",
      style: "object-fit: contain;"
    },
    links: [
      { href: "https://movie-search-app-00.netlify.app", text: "Live Demo" },
      { href: "https://github.com/ehsan05/MovieSearch-app", text: "Source Code" }
    ],
    icon: "fa-solid fa-clapperboard",
    title: "CineSearch",
    description: "Search and discover your favorite movies.",
    tech: ["JavaScript","API", "local storage"]
  },

  {
    category: "javacsript",
    image: {
      src: palindrome,
      alt: "palindrome",
      style: "object-fit: cover;"
    },
    links: [
      { href: "https://palindrome-00.netlify.app", text: "Live Demo" },
      { href: "https://github.com/ehsan05/palindrome ", text: "Source Code" }
    ],
    icon: "fa-solid fa-repeat",
    title: "Tenzies Game",
    description: "A palindrome is a word, phrase, number, or sequence that reads the same forward and backward",
    tech: ["JavaScript","CSS", "HTML"]
  },

  {
    category: "javascript",
    image: {
      src: rollDice,
      alt: "Dice Project",
      style: "object-fit: cover;"
    },
    links: [
      { href: "https://dice-roller-00.netlify.app ", text: "Live Demo" },
      { href: "https://github.com/ehsan05/dice-roller", text: "Source Code" }
    ],
    icon: "fas fa-dice",
    title: "Roller Dice Program",
    description: "Project-Description",
    tech: ["HTML", "CSS", "JavaScript"]
  },

  {
    category: "javascript",
    image: {
      src: weatherImg,
      alt: "weather Project",
      style: "object-fit: cover;"
    },
    links: [
      { href: "https://weather-app-045.netlify.app", text: "Live Demo" },
      { href: "https://github.com/ehsan05/weather-app ", text: "Source Code" }
    ],
    icon: "fas fa-sun",
    title: "Weather app",
    description: "Project-Description",
    tech: ["API", "JavaScript","CSS"]
  },

   {
    category: "react",
    image: {
      src: toDolist,
      alt: "To-Do-list",
      style: "object-fit: cover;"
    },
    links: [
      { href: "https://to-do-list000.netlify.app", text: "Live Demo" },
      { href: "https://github.com/ehsan05/TDL ", text: "Source Code" }
    ],
    icon: "fas fa-list",
    title: "To-do-List",
    description: "a Simple To-Do-list app with local storage, using mainly React.js ",
    tech: ["React.js", "JavaScript","local storage"]
  },


];



export default projectsData;