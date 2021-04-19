import splice from "./images/splice.png";
import apple_marketing_plan from "./images/apple_marketing_plan.png";
import personal_porfolio from "./images/personal_portfolio.png";
import nasa from "./images/nasa.png";

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
      "I am currently participating in a 12-week long program designed to engage in rigorous, project-based workforce development. I receive mission development skill training from NASA scientists and engineers, and I utilize the trainings to develop a preliminary design review (pdr) strategizing and desigining a payload system that intends to survive the harsh Venusian climate. I am the sub-team leader of the Science team and also partake in the Business team as well. The source link for this project will be updated as I complete this program.",
    skills: ["Strategy", "Design"],
    image: nasa,
    links: {
      // view_source: "IN PROGRESS",
    },
  },
  {
    title: "PERSONAL PORTFOLIO",
    description:
      "This project is the one that you are looking at right now! During my off time, I try not to focus academic work (to give my brain a little break) and puruse my other hobbies. But, the quarantine offered me so much free time! I learned ReactJS, HTML, CSS, and Sass during Spring Break 2021 and created this personal website.",
    skills: ["ReactJS", "HTML", "Javascript", "CSS", "Saas"],
    image: personal_porfolio,
    links: {
      view_source: "https://github.com/xinwng/xinwng.github.io/tree/master",
    },
  },
  {
    title: "MARKETING PLAN FOR APPLE'S IPHONE (2021)",
    description:
      "A 30+ page marketing plan designed to evaluate Apple's current marketing situation and construct strategies that propel future growth. It comprises of the company's profile, financial overview, current marketing situation, SWOT analysis, and much more. Take a look!",
    skills: ["Product", "Strategy"],
    image: apple_marketing_plan,
    links: {
      view_source:
        "https://docs.google.com/document/d/1bje5qloIirFweqM9K3y4k089FZEEbXnVR-Bm93dlMeQ/edit?usp=sharing",
    },
  },
];
