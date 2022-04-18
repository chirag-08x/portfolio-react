import {
  FaLinkedin,
  FaEnvelope,
  FaTelegram,
  FaGithub,
  FaLocationArrow,
} from "react-icons/fa";

import { v4 as uuidv4 } from "uuid";
import React from "react";

const data = [
  {
    id: uuidv4(),
    name: "home",
    path: "/",
  },
  {
    id: uuidv4(),
    name: "about",
    path: "/about",
  },
  {
    id: uuidv4(),
    name: "projects",
    path: "/projects",
  },
  {
    id: uuidv4(),
    name: "contact",
    path: "/contact",
  },
];

export default data;

export const externalLinks = [
  {
    id: uuidv4(),
    icon: <FaLinkedin />,
    navigate: "https://www.linkedin.com/in/chirag-agrawal-306811205/",
  },
  {
    id: uuidv4(),
    icon: <FaEnvelope />,
    navigate: "mailto:cagrawal081200@gmail.com?subject=Portfolio Enquiry.",
  },
  {
    id: uuidv4(),
    icon: <FaTelegram />,
    navigate: "https://t.me/chirag08x",
  },
  {
    id: uuidv4(),
    icon: <FaGithub />,
    navigate: "https://github.com/chirag-08x",
  },
];

export const projects = [
  {
    id: uuidv4(),
    image: "./images/main-project-img/prjct-1.png",
    title: "Sorting Visualizer",
    path: "https://sorting-visualizer08x.netlify.app",
  },
  {
    id: uuidv4(),
    image: "./images/main-project-img/prjct-3.png",
    title: "Comfy Sloth Store",
    path: "https://comfy-store08x.netlify.app",
  },
  {
    id: uuidv4(),
    image: "./images/dummy.jpeg",
    title: "Github User Analytics",
    path: "#",
  },
  {
    id: uuidv4(),
    image: "./images/dummy.jpeg",
    title: "College ERP",
    path: "#",
  },
];

export const frontend = [
  {
    id: uuidv4(),
    title: "HTML/CSS",
    percent: "75%",
  },
  {
    id: uuidv4(),
    title: "javascipt",
    percent: "70%",
  },
  {
    id: uuidv4(),
    title: "React",
    percent: "80%",
  },
];

export const otherskills = [
  {
    id: uuidv4(),
    title: "Python",
    percent: "80%",
  },
];

export const timeline = [
  {
    id: uuidv4(),
    year: 2017,
    text:
      "Wrote my first line of code in School. I started out with Java. Learned basic concepts of Java and how high level code is compiled down to low level language.",
  },
  {
    id: uuidv4(),
    year: 2018,
    text:
      "Explored more concepts of Java and got little advanced into it, got the idea why programming is important and what all amazing things we can do with few lines of code.",
  },
  {
    id: uuidv4(),
    year: 2019,
    text:
      "Started learning C programming language and kept on exploring what all other lamguages are out there. Learned some new data structure like stack, queue, deque etc.",
  },
  {
    id: uuidv4(),
    year: 2020,
    text:
      "Started learning DSA as a part of my school project. Got to know some amazing and new data structures which I have never heard of like Linked List, Trees, Binary Trees etc.",
  },
  {
    id: uuidv4(),
    year: 2021,
    text:
      "Explored what WEB is and started learning HTML and CSS, and decided to pursue my carrer in frontend engineering only. After that I started with JS, and got to know why is it so important especially for web development and build several projects using JS.",
  },
  {
    id: uuidv4(),
    year: 2022,
    text:
      "Started exploring frontend libraries and finally decided to go with React. Probably one of my best decisions. I immediately fell in love with REACT and learned all the cool things that we can do with it, also build several projects with React. ",
  },
];

export const personalInfo = [
  {
    id: uuidv4(),
    title: "address",
    text: ["Revell Orchid, Pune 411047, Maharastra"],
    icon: <FaLocationArrow />,
    redirect: "https://goo.gl/maps/poPCRJirhyycTEPG7",
  },
  {
    id: uuidv4(),
    title: "email",
    text: ["cagrawal081200@gmail.com"],
    icon: <FaEnvelope />,
    redirect: "mailto:cagrawal081200@gmail.com?subject=Portfolio Enquiry.",
  },
  {
    id: uuidv4(),
    title: "telephone",
    text: ["+91 9045743168, +91 7385262784"],
    icon: <FaEnvelope />,
    redirect: "#",
  },
];
