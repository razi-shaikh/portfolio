import ecommerce from "../assets/projects/ecommerce.png";
import signInUp from "../assets/projects/signInUp.png";
// import LMS from "../assets/projects/LMS.png";
// import payment from "../assets/projects/payment.png";
import portfolio from "../assets/projects/portfolio.png";
import pdfNotes from "../assets/projects/pdfNotes.png";
import meta from "../assets/projects/meta.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: ecommerce,
    description:
      "An e-commerce platform built with HTML, SCSS, React, and JavaScript for a responsive and dynamic user experience. It integrates Stripe for secure payments and uses Strapi for backend content management, providing a smooth shopping and checkout process.",
    technologies: ["HTML", "scss", "React", "Stripe", "Strapi"],
    live: "",
    github: "https://github.com/razi-shaikh/E-commerce",
    visibility: true,
  },
  {
    title: "Sign-in/Login System",
    image: signInUp,
    description:
      "A secure and efficient sign-in/login system built using HTML, Tailwind CSS, React, Node.js, Express, and MongoDB. The system includes robust security features like JWT (JSON Web Token) authentication, password hashing for secure password storage, cookies for session management, and OTP (One-Time Password) verification for enhanced account protection. This ensures a seamless and secure user login experience, with a modern UI and reliable backend support.",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "MonogDB",
      "React",
      "Node.js",
      "Express",
    ],
    live: "",
    github: "https://github.com/razi-shaikh/SignIn-SignUp",
    visibility: true,
  },
  {
    title: "Pdf Notes With AI",
    image: pdfNotes,
    description:
      "A note-taking website that allows users to extract and organize notes from PDFs, integrated with AI-powered Q&A using Gemini AI for instant assistance. Built with Next.js, TypeScript, Tailwind CSS, Convex DB, and ShadCN UI, it offers a seamless and interactive learning experience.",
    technologies: [
      "nextjs",
      "typescript",
      "tailwindcss",
      "convex DB",
      "gemini AI",
      "shadcn ui",
    ],
    live: "https://pdf-notes-ai.vercel.app",
    github: "https://github.com/razi-shaikh/pdf-notes-with-ai",
    visibility: false,
  },
  {
    title: "Meta Automation",
    image: meta,
    description:
      "An Instagram automation tool that automatically replies to comments on posts and sends direct messages (DMs) based on user interactions. Developed with Next.js, TypeScript, Tailwind CSS, Prisma, Neon DB, Redux, and ShadCN UI, it streamlines social media engagement for businesses and creators.",
    technologies: [
      "nextjs",
      "typescript",
      "tailwindcss",
      "shadcn ui",
      "prisma",
      "neon DB",
      "redux",
    ],
    live: "https://meta-automations.vercel.app",
    github: "https://github.com/razi-shaikh/meta-automation-complete",
    visibility: false,
  },

  {
    title: "Personal Portfolio Website",
    image: portfolio,
    description:
      "A sleek and modern Portfolio website built with HTML, Tailwind CSS, Next.js, and TypeScript. It showcases professional skills and projects with an interactive design. The portfolio features 3D UI components that provide a visually engaging and dynamic user experience, highlighting creativity and technical proficiency. The website is fully responsive, ensuring seamless navigation across devices.",
    technologies: ["HTML", "Tailwind CSS", "Next.js", "TypeScript"],
    live: "https://razi-resume.vercel.app",
    github: "https://github.com/razi-shaikh/portfolio",
    visibility: true,
  },
];

export const CONTACT = {
  phoneNo: "+91 9967908218",
  email: "skrazi9913@gmail.com",
  // address: {},
};
