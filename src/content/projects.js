import splice from "./images/splice.svg";
import apple_marketing_plan from "./images/apple_marketing_plan.svg";
import personal_porfolio from "./images/portfolio.svg";
import nasa from "./images/nasa.svg";

export default [
  {
    title: "$PLICE",
    description:
      "$PLICE is a way of simplifying everyday experiences. This project was founded based on the desire for efficency and convenience. The premise of this application entails the idea to easily split the check when dining out with friends or family. Users can select the restaurant they choose and the menu for the respective restaurant will display. Each user will select the food they ordered and pass it along to the next person, and the total for each user will output.",
    skills: ["C++", "CMake", "Google Test Suite", "Vim"],
    image: splice,
    links: {
      view_source: "https://github.com/xinwng/splice",
    },
  },
  {
    title: "NASA PDR",
    description:
      "I participated in a 12-week long program: NASA Lucy Space Mission Concept Academy - designed to engage students in rigorous, project-based workforce development. I received mission development skill training from NASA scientists and engineers, and I utilized such trainings to develop a preliminary design review (PDR) strategizing and desigining a payload system that intends to survive the harsh Venusian climate. This was a collaborative group effort with 7 other students. I was the co-leader of the Science team and also partook in the Business team as well. Check out the source link below to see our final deliverable!",
    skills: ["Strategy", "Design"],
    image: nasa,
    links: {
      view_source:
        "https://docs.google.com/document/d/1LZLYNr6iaqxR50lXMJkE3FXMP4v0yt8N5IifEt1bURI/edit?usp=sharing",
    },
  },
  {
    title: "PERSONAL PORTFOLIO",
    description:
      "This project is the one that you are looking at right now! During my off time, I try not to focus academic work (to give my brain a little break) and pursue my other hobbies. But, the quarantine offered me so much free time! I learned ReactJS, HTML, CSS, and Sass during Spring Break 2021 and created this personal website.",
    skills: ["ReactJS", "HTML", "Javascript", "CSS", "Saas"],
    image: personal_porfolio,
    links: {
      view_source: "https://github.com/xinwng/xinwng.github.io/tree/master",
    },
  },
  {
    title: "MARKETING PLAN FOR APPLE'S IPHONE",
    description:
      "A 30+ page marketing plan designed to evaluate Apple's marketing situation (as of 2021) and construct strategies that propel future growth. It comprises of the company's profile, financial overview, current marketing situation, SWOT analysis, and much more. Take a look!",
    skills: ["Product", "Strategy"],
    image: apple_marketing_plan,
    links: {
      view_source:
        "https://docs.google.com/document/d/1bje5qloIirFweqM9K3y4k089FZEEbXnVR-Bm93dlMeQ/edit?usp=sharing",
    },
  },
];
