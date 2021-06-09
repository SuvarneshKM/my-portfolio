/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";
import MUNNAR from "./assets/images/vibgyor.jpg";
import CUSAT from "./assets/images/cusat.jpg";
import VERZEO from "./assets/images/verzeo.png";
import Hack_Club from "./assets/images/Hack_Club_cucek.png";
import TinkerHub from "./assets/images/TinkerHub.png";
import CTracker from "./assets/images/ctracker.jpg";
import Logo_Generator from "./assets/images/logo_generator.png";
import Vikings from "./assets/images/vikings.png";
import Cert1 from './assets/images/blogathon.jpg';
import Cert2 from './assets/images/code4munnar.jpg';
import Cert3 from './assets/images/devfest.jpg';
import Cert4 from './assets/images/domectf.jpg';
import Cert5 from './assets/images/hackcamp.jpg';
import Cert6 from './assets/images/internship.jpg';
import Cert7 from './assets/images/localhackday.jpg';
import Cert8 from './assets/images/localhackdaybuild.jpg';








const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "jack",
  title: "Hi all, I'm jack",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1PJsUn4bhYwQxaNPJ0GeOSPtkHddW51VC/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/suvarneshkm",
  linkedin: "https://www.linkedin.com/in/suvarnesh-km/",
  gmail: "suvarnesh1729@gmail.com",
  twitter: "https://twitter.com/suvarneshkm",
  facebook: "https://www.facebook.com/suvarneshkm",
  medium: "https://medium.com/@suvarnesh",
  instagram: "https://www.instagram.com/_suvarnesh.rdg_/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cochin University of Science and Technology",
      logo: CUSAT,
      subHeader: "Bachelor of Technology in Electrical and Electronics",
      duration: "2018 - present",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",
      company: "MUNNAR VIBGYOR TOURISM'S HELLOMUNNAR APP",
      companylogo: MUNNAR,
      date: "Jan 2021",
      desc: "Woked as the Backend developer in hellomunnar.in Pogressive Web Application Development.",
    },
    {
      role: "Internet of Things Intern",
      company: "Verzeo Intern",
      companylogo: VERZEO,
      date: "Feb 2020 – Mar 2020",
      desc: "Verzeo is an AI-Based online learning platform offering students a holistic learning experience, help them become Industry ready.",
      descBullets: [
        "Learned more about Internet of Things",
        "Build a project using Internet of Things"
      ]
    },
    {
      role: "Tech Lead",
      company: "Hack Club CUCEK",
      companylogo: Hack_Club,
      date: "2019 - 2021",
      desc: "Hack Club is a nonprofit network of high school coding clubs and makers around the world",
      descBullets: [
        "Conducting Learning programs",
        "Organizing events with the team",
        "Web Developer"
      ]
    },
    {
      role: "Tech Lead",
      company: "TinkerHub CUCEK",
      companylogo: TinkerHub,
      date: "2019 - 2021",
      desc: "Community of tinkerers, makers, policy geeks & students and are working towards mapping and empowering people who share a passion to innovate",
      descBullets: [
        "Conducting Learning programs",
        "Organizing events with the team",
        "Web Developer"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "THESE ARE SOME OF MY PROJECT'S, BUILD DURING MY CAREER",
  projects: [
    {
      image: CTracker,
      projectName: "C-Tracker",
      projectDesc: "Track your foot and Confirm your footprints",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/akhil-tj/Ctracker"
        },
        {
          name: "Download Link",
          url: "https://drive.google.com/file/d/1AKiJjP-qoJQP1FG9tdlceQLlRSXX3bH_/view"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: MUNNAR,
      projectName: "Hello Munnar",
      projectDesc: "Hello Munnar guides you through every nook and corner of VIBGYOR tourism",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Kites-Foundation/hello-munnar-backend"
        },
        {
          name: "Visit Website",
          url: "https://hellomunnar.in/"
        }
      ]
    },
    {
      image: Logo_Generator,
      projectName: "Hack Club Logo Generator",
      projectDesc: "This is a logo generator for Hack Club Campus Chapters",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/SuvarneshKM/logo-generator"
        },
        {
          name: "Visit Website",
          url: "https://suvarneshkm.github.io/logo-generator/"
        }
      ]
    },
    {
      image: Vikings,
      projectName: "History Vikings Clone",
      projectDesc: "History Vikings Clone Build using React Js , Redux and Firebase",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/SuvarneshKM/history-vikings-clone"
        },
        {
          name: "Visit Website",
          url: "https://history-vikings-clone.web.app/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      image: Cert1,
    },
    {
      image: Cert2,
    },
    {
      image: Cert3,
    },
    {
      image: Cert4,
    },
    {
      image: Cert5,
    },
    {
      image: Cert6,
    },
    {
      image: Cert7,
    },
    {
      image: Cert8,
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "suvarneshkm", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
