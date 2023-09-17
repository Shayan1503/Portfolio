import {
  ML,
  java,
  research,
  curious,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  Java,
  python,
  latex,
  tensorflow,
  cpp,
  jupyter,
  comviva,
  rinex,
  soa,
  edunet_ibm,
  amazonclone,
  tictactoe,
  portfolio,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Enthusiast",
    icon: ML,
  },
  {
    title: "Research Assistant",
    icon: research,
  },
  {
    title: "Java Developer",
    icon: java,
  },
  {
    title: "Knowledge Seeker",
    icon: curious,
  },
];

const technologies = [
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "LaTeX",
    icon: latex,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Jupyter",
    icon: jupyter,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Student Intern",
    company_name: "Rinex",
    icon: rinex,
    iconBg: "#E3EBF0",
    date: "Sep 2021 - Nov 2021",
    points: [
      "Did a course on Machine Learning",
      "Made a few simple ML models",
      "Was tested on my knowledge",
    ],
  },
  {
    title: "Student Internship",
    company_name: "Edunet, IBM",
    icon: edunet_ibm,
    iconBg: "#fff",
    date: "June 2023 - July 2023",
    points: [
      "Was taught the fundamentals of Front-End Development",
      "Received an Enterprise Design Thinking Practitioner badge from IBM",
      "Made a clone of Amazon website as the final project",
    ],
  },
  {
    title: "Trainee",
    company_name: "COMVIVA",
    icon: comviva,
    iconBg: "#000",
    date: "June 2023 - Aug 2023",
    points: [
      "Got trained in AI/ML extensively",
      "Attended master classes held by experts from the field",
      "Gained hands-on knowledge about the industry",
      "Worked with a team to create a model that used regression techniques to do its predictions",
    ],
  },
  {
    title: "Undergraduate Researcher at Symposium 2023",
    company_name: "SOA",
    icon: soa,
    iconBg: "#8C0404",
    date: "May 2023",
    points: [
      "Collaborated with Vijaya Sinha and Sudipta Maity under the mentorship of Bharat Jyoti Ranjan Sahu.",
      "Conducted in-depth research on machine learning algorithms applied to board games.",
      "Analyzed and compared algorithm performance across various scenarios.",
      "Presented findings at the ITER, SOA Symposium.",
    ],
  },
];

const projects = [
  {
    name: "TicTacToe",
    description:
      "A simple game of TicTacToe made using Tkinter for the GUI. The AI plays using the minimax algorithm",
    tags: [
      {
        name: "python",
        color:
          "bg-gradient-to-b from-yellow-400 via-cyan-300 to-blue-800 text-transparent bg-clip-text",
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/Shayan1503/TicTacToe",
  },
  {
    name: "Amazon clone",
    description:
      "A clone of the Amazon website that was built as a final project in one of my student internships. The website is responsive but not entirely functional.",
    tags: [
      {
        name: "html5",
        color: "orange-text-gradient",
      },
      {
        name: "css3",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color:
          "text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600",
      },
    ],
    image: amazonclone,
    source_code_link: "https://github.com/Shayan1503/Amazon-clone",
  },
  {
    name: "Portfolio",
    description: "This is the same portfolio that you are on right now.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color:
          "bg-clip-text text-transparent bg-gradient-to-b from-slate-50 via-slate-200 to-slate-500",
      },
      {
        name: "tailwind",
        color:
          "bg-gradient-to-b from-cyan-100 via-cyan-300 to-cyan-500 text-transparent bg-clip-text",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
