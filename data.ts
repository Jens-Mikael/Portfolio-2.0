import EskimoImage from "./public/projects/eskimo.png";
import HansatoriImage from "./public/projects/hansatori.png";
import LanguageImage from "./public/projects/language.png";
import PortfolioImage from "./public/projects/portfolio.png";
import RoofImage from "./public/projects/roof.png";
import TeslaImage from "./public/projects/tesla.png";
import WorkoutImage from "./public/projects/workout.png";
import YoutubeImage from "./public/projects/youtube.png";

export const projectsData = [
  {
    img: "/projects/language-master.png",
    title: "Language Master",
    shortDesc:
      "Language Master was an app that I built recently mainly for myself with the goal of using it as a tool for my exams. Now, thought, my friend uses it as well :). I built it mainly using Firebase in Nextjs' serverless environment and then hosted it on Vercel.",
    longDesc:
      "Language Master is highly inspired by Quizlet and it lets your practise words with flashcards or by writing them. While building Language Master, I learned several things about databases and backend development. I learned how to fetch data depening on state and also data security. I also implemented in this project a search engine provided by MiniSearch that lets you search for users and study sets.",
    tools: ["Nextjs", "Tailwind", "Firebase", "Vercel", "MiniSearch"],
    github: "https://github.com/Jens-Mikael/language-master",
    site: "https://language-master.vercel.app/",
  },
  {
    img: "/projects/realtime-chat.png",
    title: "Realtime Chat",
    shortDesc:
      "Realtime Chat was on the other hand an app where you can chat in realtime with other people. This app was primarly built to strengten my firebase skills and I believe that i succeeded quite well. On the other hand, I never hosted this site since I thought it would never have any use after all.",
    longDesc:
      "This application taught me lots of snapshot listeners and realtime data flow, but thanks to Firebase's realtime db, it was fairly easy to implement. This project taught me as well the importance of authentication, data access and web architecture overall.",

    tools: ["Nextjs", "Tailwind", "Firebase"],
    github: "https://github.com/Jens-Mikael/realtime-chat-app",
    site: false,
  },
  {
    img: "/projects/youtube-clone.png",
    title: "Youtube Clone",
    shortDesc:
      "I wanted to clone Youtube so bad so I did it. With this project I learned valubale design replication with css that I belive will come in very handy (as soon as you employ me :)).",
    longDesc:
      "With this project I replicated Youtube's landing page literally pixel by pixel with Tailwind CSS. Overall I believe I succeeded quite well since when I asked my sister if she could tell the difference between this and the real page, she was completly astonished by the similarity.",

    tools: ["Nextjs", "Tailwind"],
    github: "https://github.com/Jens-Mikael/youtube-clone",
    site: false,
  },
  {
    img: "/projects/tesla-clone.png",
    title: "Tesla Clone",
    shortDesc:
      "With cloning Tesla's webpage I learned even more about CSS and Tailwind. This was a fun one-day project that I did with the purpose of using these skills in my career.",
    longDesc:
      "As well as my clone of Youtube's landing page, this project is also a pixel perfect replication of Tesla's page. This project can also pretty much be considered as my first project with Tailwind CSS.",

    tools: ["Nextjs", "Tailwind"],
    github: "https://github.com/Jens-Mikael/tesla-clone",
    site: false,
  },
];

export const projectsData_2 = [
  {
    title: "Eskimo Village",
    description:
      "A self-help learning portal website with blog lessons, video lectures and a respectful, encouraging and strongly connected community.",
    github: "",
    link: "",
    src: EskimoImage,
    tools: ["Nextjs", "Tailwind", "Cloudflare", "Matrix", "REST Api"],
  },
  {
    title: "Roof History",
    description:
      "A production level website for a roof assessment start-up where I was responsible for creating the backend functionality e.g. auth and numerous CRUD features",
    github: "",
    link: "",
    src: RoofImage,
    tools: [
      "Nextjs",
      "Tailwind",
      "NextAuth",
      "PostgreSQL",
      "Drizzle ORM",
      "Resend",
      "Edgestore",
      "Google Maps API",
    ],
  },
  {
    title: "Hansatori Pharmacy",
    description:
      "A website for a pharmacy located in Turku, Finland, where visitors can browse current stock and information about specific products.",
    github: "",
    link: "",
    src: HansatoriImage,
    tools: [
      "Nextjs",
      "Tailwind",
      "i18n",
      "PostgreSQL",
      "Drizzle ORM",
      "Resend",
      "Google Maps API",
    ],
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio I built to showcase my work. Here I include all of my best projects together with the techstack I used.",
    github: "https://github.com/Jens-Mikael/Portfolio-2.0",
    link: "",
    src: PortfolioImage,
    tools: ["Nextjs", "Tailwind"],
  },
  {
    title: "Workout Tracker",
    description:
      "A workout tracking website that enables users to plan their workouts, track them, view their statistics and progress and browse on a calender previous workouts.",
    github: "https://github.com/Jens-Mikael/Workout-Tracker",
    link: "",
    src: WorkoutImage,
    tools: ["Nextjs", "Tailwind", "NextAuth", "PostgreSQL", "Drizzle ORM"],
  },
  {
    title: "Language Master",
    description:
      "A fullstack app built to create, update, delete, read and search for flashcards that you or someone else has made to practise languages .",
    github: "https://github.com/Jens-Mikael/language-master",
    link: "https://language-master.vercel.app/",
    src: LanguageImage,
    tools: ["Nextjs", "Tailwind", "Firebase", "Vercel", "MiniSearch"],
  },
  {
    title: "Youtube Clone",
    description:
      "A clone of Youtube's frontpage built to showcase my skills in building pixelperfect replications from designs or existing websites.",
    github: "https://github.com/Jens-Mikael/youtube-clone",
    link: "",
    src: YoutubeImage,
    tools: ["Nextjs", "Tailwind"],
  },
  {
    title: "Tesla Clone",
    description:
      "A simple one day project of Tesla's frontpage to showcase my skills in pixelperfect replications from designs.",
    github: "https://github.com/Jens-Mikael/tesla-clone",
    link: "",
    src: TeslaImage,
    tools: ["Nextjs", "Tailwind"],
  },
];

export const skillsData = [
  { src: "reactjs-icon.svg" },
  { src: "next-js.svg" },
  { src: "tailwindcss-icon.svg" },
  { src: "nextauth.png" },
  { src: "firebase-icon.svg" },
  { src: "drizzle-orm.png" },
  { src: "postgresql.svg" },
];

export const servicesData = [
  {
    category: "Web Development",
    title: "Frontend Development",
    desc: "I can provide the frontend for your application, regardless of the prerequisites. I have a couple of years of experience in the field and can create clean, high-performance code, whether you have a design or sketch already or need one created from scratch. My main goal on the client side is to deliver a unique UI and UX that enhances your application's value and delights your customers.    ",
  },
  {
    category: "Web Development",
    title: "Backend Development",
    desc: "I am fluent in creating and developing the backend and functionality of a web application using Firebase and DrizzleORM in a Next.js environment. I am also capable of building and working with REST APIs. With these tools, I can provide a robust database and authentication system, including OAuth providers like Google and Facebook or traditional email and password authentication.",
  },
  {
    category: "Web Development",
    title: "Design Replication",
    desc: "Thanks to my experience with website cloning, I'm fluent in creating and developing a web application from any design or source. I'm not primarily a website designer, but with a bit of direction, an idea, or a sketch, I can bring any vision to life for your business's website.",
  },
];

export const aboutData = {
  shortDesc:
    "A software developer who specializes in building the web. I'm looking forward to develop my skills in the field and contributing to meaningful projects. ",
  longDesc1:
    "I'm 17 years old and speak English, Swedish, Finnish, and Norwegian fluently, and also a bit of German. I have been programming for around 4 years now. I initially began with game development using Pygame in Python, but afterward, I gravitated more toward web development and have been passionate ever since about building beautiful web applications with TypeScript and Tailwind in Next.js. Recently, however, I have been focusing more on the architecture of web apps and striving to enhance the performance between the client and backend in the most secure way. I've started learning about databases and authentication with Firebase, SQL databases with DrizzleORM, and OAuth services.",
  longDesc2:
    "Despite being in high school, I mostly spend my free time programming and playing music. I also highly value health, so when I'm not in front of the computer or with my guitar, I go to the gym and train until I can't lift my arms anymore. Either way, I love learning and having fun solving problems, which is why I believe I could be a great developer for your business.",
};

export const CVData = {
  education: [
    {
      title: "High School - BJSS",
      date: "2023 - Now",
      desc: "Currently in my second year of Pori's Swedish high school.",
    },
    {
      title: "Primary School - BJSS",
      date: "2014 - 2023",
      desc: "Finished primary school in Pori with a 9.8 certificate from a scale 4-10.",
    },
  ],
  experience: [
    {
      title: "Shop Employee - SOK",
      date: "2023 - 2023",
      desc: "A two week long summer job period at my local grocery store.",
    },
    {
      title: "Shop Employee - SOK",
      date: "2022 - 2022",
      desc: "A two week on-the-job learning period at my local grocery store in Pori.",
    },
  ],
};
