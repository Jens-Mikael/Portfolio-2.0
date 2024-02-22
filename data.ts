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

export const skillsData = [
  { src: "reactjs-icon.svg" },
  { src: "next-js.svg" },
  { src: "tailwindcss-icon.svg" },
  { src: "nextauth.png" },
  { src: "firebase-icon.svg" },
  { src: "drizzle-orm.png" },
  { src: "postgresql.svg" },
  { src: "mongodb-icon.svg" },
];

export const servicesData = [
  {
    category: "Web Development",
    title: "Frontend Development",
    desc: "I can provide the frontend to your application, whatever the prerequisites are. I have a couple of years of experience in the field and can provide you with clean and high performance code provided you have already a some sort of design or sketch I could develop and customize. Either way my, main purpose on the client side is to provide an unique UI and UX to your application and customers.",
  },
  {
    category: "Web Development",
    title: "Backend Development",
    desc: "I'm fluent in creating and developing the backend and functionality of a web application using Firebase and DrizzleORM. With these tools, I can provide you with a database and authentication with OAuth providers such as Google and Facebook or the usual email and password. ",
  },
  {
    category: "Web Development",
    title: "Design Replication",
    desc: "Thanks to my experience of website cloning, I'm fluent in creating and developing a web application from any sort of design or source. I'm not myself very much of a website designer, but with a little bit of an idea or explanation with a sketch or design I can make anything possible on the client.",
  },
];

export const aboutData = {
  shortDesc:
    "I'm a software developer who specializes in building the web. I'm lookin forward to develop my skills in the field and contributing to meaningful projects. ",
  longDesc1:
    "I'm 16 years old and speak fluently English, Swedish, Finnish and Norwegian and also a bit of German. I have been programming for a couple of years now. I first started with game development with the Pygame python library but after that I graviated more into web development and have been passionated ever since about building beautiful web applications with Typescipt and Tailwind in Nextjs. Recently, on the other hand, I have been focusing more on the architecture of web apps and have began learning about databases and authentication with Firebase and other SQL databases with DrizzleORM and OAuth services. ",
  longDesc2:
    "Despite being in high school, I mostly spend my freetime programming and playing music. I also highly value health, so when I'm not in front of the computer or by my guitar I go to the gym and train untill I can't lift my arms anymore. Either way, I love learning and having fun with solving problems and hence this I belive I could be a great option for you to hire (or employ). ",
};

export const CVData = {
  education: [
    {
      title: "High School - BJSS",
      date: "2023 - Now",
      desc: "Currently in my first year of high school in Pori's Swedish high school.",
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
