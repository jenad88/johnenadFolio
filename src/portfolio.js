/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "John Enad",
  title: "Hi, I'm John Enad",
  subTitle: emoji(
    "A Generalist Full-stack Software Engineer that enjoys building Web and Cloud applications in various Platforms and Stacks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jenad88",
  linkedin: "https://www.linkedin.com/in/johnenad/",
  // gmail: "username@gmail.com",
  // gitlab: "https://gitlab.com/username",
  // facebook: "https://www.facebook.com/username",
  medium: "https://medium.com/@johnenad",
  // stackoverflow: "https://stackoverflow.com/users/10422806/username",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK APPLICATION DEVELOPER WHO WANTS TO SOLVE REAL WORLD PROBLEMS USING TECHNOLOGY",
  skills: [
    emoji("⚡ Front-end skills for Web design and development (Reactjs / Angular / Vue.js / Blazor)"),
    emoji("⚡ Data Visualization (Tableau / Power BI / Qlik / Plotly / D3.js)"),
    emoji("⚡ Material UI / Bootstrap / Tailwind CSS / Radix UI / ReactStrap / Mantine / Next UI"),
    emoji("⚡ Back-end skills to complement front-end (Java / .NET Core / Python / Nodejs)"),
    emoji("⚡ Database skills to store data (MySQL / PostgreSQL / MongoDB / SQL Server / NoSQL)"),
    emoji("⚡ Cloud and accompanying DevOps skills (AWS / Docker / Jenkins / Terraform)"),
    emoji("⚡ Some Serverless Stack (AWS Lambda / ECS Fargate / Amazon Aurora / Amazon DynamoDB)"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "microsoft",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of the Visayas",
      logo: null,
      subHeader: "Bachelor of Science in Nursing",
      duration: "",
      desc: "",
      descBullets: null
    },
    {
      schoolName: "University of San Jose-Recoletos",
      logo: null,
      subHeader: "Bachelor of Science in Computer Science",
      duration: "",
      desc: "",
      descBullets: null
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Database",
      progressPercentage: "60%"
    },
    {
      Stack: "Cloud",
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
      role: "Software Engineer",
      company: "JP Morgan Chase & Co.",
      companylogo: null,
      date: "June 2015 – Present",
      desc: "Currently a full-stack engineer working on a variety of projects.",
      descBullets: [
        "Worked on a variety of projects including a full-stack application for the firm's internal use.",
        "Exposed to a variety of technologies including React, Angular, Spring Boot, .NET, Python, SQL Server, NoSQL, AWS and more."
      ]
    },
    {
      role: "Software Developer",
      company: "AFS Technologies",
      companylogo: null,
      date: "May 2012 – May 2015",
      desc: "Full-stack developer for Package Goods and Foodservice commercial software",
    },
    {
      role: "Software Developer",
      company: "Philadelphia DHS",
      companylogo: null,
      date: "Jan 2007 – Sep 2015",
      desc: "Develop and support software for the Philadelphia Department of Human Services",
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Software Developer - Associate",
      subtitle: null,
      image: require("./assets/images/awsCertifiedDeveloperAssociate.png"),
      imageAlt: "AWS Certified Developer - Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/0c514fdc-0c5c-42cf-a076-3ab045c7b7e4/public_url"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: null,
      title: "Coming Soon",
      description:
        "Coming Soon"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embedded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: null,
  email_address: "jenad88@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "john_enad_1", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
