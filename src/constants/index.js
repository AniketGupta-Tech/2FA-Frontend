import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "Two Step Authentication",
    icon: web,
  },
  {
    title: "OTP VIA SMS ",
    icon: mobile,
  },
  {
    title: "OTP VIA EMAIL",
    icon: backend,
  },
  {
    title: "BLOCKCHAIN TECHNOLOGY USED",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Two-Step Authentication",
    // company_name: "2FA",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Early 1980",
    points: [
      "Extra Security Layer: 2FA requires two forms of verification (e.g., password + code) to access an account, making it harder for hackers to breach.",
      "Reduces Unauthorized Access: Even if a password is stolen, the second factor (like a phone code) prevents unauthorized entry.",
      "Wide Compatibility: Supported across email, banking, social media, and more, making it easy to implement.",
      "User-Friendly: Simple to use while significantly boosting account protection.",
    ],
  },
  {
    title: "SMS-Based OTP",
    // company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2000",
    points: [
      "Instant Delivery: Receive one-time passwords directly on your phone for quick and secure access.",
      "Wide Accessibility: Works on any mobile device, ensuring compatibility for all users.",
      "Enhanced Security: Adds a dynamic layer of protection beyond static passwords.",
      "User-Friendly: Simple and familiar process, making it easy for everyone to use.",
    ],
  },
  {
    title: "Email-Based OTP",
    // company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "2010",
    points: [
      "Convenient and Reliable: Get one-time passwords delivered straight to your inbox.",
      "Device-Independent: Accessible on any device with email capabilities, ensuring flexibility.",
      "Extra Security Layer: Combines your password with a time-sensitive code for stronger protection.",
      "Backup Option: Acts as a reliable fallback if SMS-based OTP is unavailable.",
    ],
  },
  {
    title: "Blockchain-Based SSO",
    // company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2014",
    points: [
      "Decentralized Security: Eliminates central points of failure, ensuring robust protection.",
      "User Control: Empowers users to manage their identity data securely and privately.",
      "Seamless Integration: Enables single sign-on across multiple platforms without compromising security.",
      "Future-Proof Technology: Leverages blockchain’s immutability and transparency for cutting-edge authentication."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "T-Mobile Data Breaches (2021-2023)",
    description:
      "Between 2021 and 2023, T-Mobile experienced multiple data breaches that compromised sensitive information of millions of customers. Investigations revealed that the lack of multi-factor authentication (MFA) was a contributing factor, leaving critical systems vulnerable to unauthorized access.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carrent,
    source_code_link: "https://www.theverge.com/2024/9/30/24258763/t-mobile-fcc-settlement-cybersecurity-investment?utm_source=chatgpt.com",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
