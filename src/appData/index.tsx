import {
  App,
  GalleryImage,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import file from "../../assets/workaccordion/file.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import paint from "../../assets/paint.png";
import quake from "../../assets/quake.png";
export const TechIcon = {
  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  UIPATH:
    "https://img.shields.io/badge/UiPath-FA4616?style=for-the-badge&logo=uipath&logoColor=white",
  AWS: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
  AZURE:
    "https://img.shields.io/badge/Azure-%230078D4.svg?style=for-the-badge&logo=microsoft-azure&logoColor=white",
  GOOGLECLOUD:
    "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  DOCKER:
    "https://img.shields.io/badge/Docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white",
  SQL: "https://img.shields.io/badge/SQL-%234479A1.svg?style=for-the-badge&logo=postgresql&logoColor=white",
  MATILLION:
    "https://img.shields.io/badge/Matillion-%2319232D.svg?style=for-the-badge&logo=databricks&logoColor=white",
  POWERSHELL:
    "https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white",
  CHATGPT:
    "https://img.shields.io/badge/LLM_Integration-74aa9c?style=for-the-badge&logo=openai&logoColor=white",
  TYPESCRIPT:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  NEXTJS:
    "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  REDUX:
    "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  NODEJS:
    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  POWERAUTOMATE:
    "https://img.shields.io/badge/Power_Automate-%230066FF.svg?style=for-the-badge&logo=powerautomate&logoColor=white",
  POWERAPPS:
    "https://img.shields.io/badge/Power_Apps-%23742774.svg?style=for-the-badge&logo=powerapps&logoColor=white",
  LAMBDA:
    "https://img.shields.io/badge/AWS_Lambda-%23FF9900.svg?style=for-the-badge&logo=awslambda&logoColor=white",
  DYNAMODB:
    "https://img.shields.io/badge/DynamoDB-%234053D6.svg?style=for-the-badge&logo=amazondynamodb&logoColor=white",
  GODOT:
    "https://img.shields.io/badge/Godot-%23478CBF.svg?style=for-the-badge&logo=godot-engine&logoColor=white",
  PHOTOSHOP:
    "https://img.shields.io/badge/Photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe-photoshop&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "My Photography Collection",
      message: "",
      Icon: gallery,
      isMinimized: false,
      zIndex: 0,
      program: App.MYGALLERY,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    9,
    {
      id: 0,
      title: "Untitled - Paint",
      message: "",
      Icon: paint,
      isMinimized: false,
      zIndex: 0,
      program: App.PAINT,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    10,
    {
      id: 0,
      title: "Quake",
      message: "",
      Icon: quake,
      isMinimized: false,
      zIndex: 0,
      program: App.QUAKE,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.PROFESSIONAL,
  WorkType.PERSONAL,
  WorkType.CREDENTIALS,
];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 1,
    title: "Principal Consultant, Software Architecture - TTEC Digital",
    date: "Sept 2026 - Present",
    gitURL: "",
    techstack: [
      TechIcon.AWS,
      TechIcon.LAMBDA,
      TechIcon.DYNAMODB,
      TechIcon.PYTHON,
      TechIcon.CHATGPT,
    ],
    gallery: [],
    overview: `I develop and deliver software architecture solutions for consulting clients,
    building customer-focused relationships to identify their technical and business challenges.
    I develop architectural specifications and requirements to arrive at the best solution, whether
    establishing a new architecture or optimizing an existing one along with its associated
    processes. I identify, define, and communicate the technical decisions, concepts, and
    interrelationships within complex systems, and document the architectural model in enough detail
    for developers and other stakeholders to build from. The role draws on deep subject matter
    expertise across IT infrastructure, technology platforms, and architecture evaluation. I present
    proposals to clients and drive working sessions to keep expectations, direction, and timelines
    aligned.`,
  },
  {
    id: 2,
    title: "Agentic Automation Engineer - Infocap AI",
    date: "Nov 2024 - Sept 2026",
    gitURL: "",
    techstack: [
      TechIcon.AWS,
      TechIcon.LAMBDA,
      TechIcon.DYNAMODB,
      TechIcon.POWERAUTOMATE,
      TechIcon.UIPATH,
      TechIcon.PYTHON,
      TechIcon.CHATGPT,
    ],
    gallery: [],
    overview: `Full-time, remote out of the District of Columbia. I design and deliver technical
    proofs of concept for government and enterprise clients, using AWS Connect, the Power Platform
    and UiPath to support pre-sales and solution architecture work. On our largest client I serve as Development Lead
    and Solution Architect on AWS, working across Connect, Lambda, DynamoDB and CloudFormation.
    I also build Infocap's own internal automation and integration systems, including the team's
    phone system, put together with Connect, Lambda and DynamoDB.`,
  },
  {
    id: 3,
    title: "Sr. Service Analyst - Exelon",
    date: "Oct 2023 - Nov 2024",
    gitURL: "",
    techstack: [TechIcon.UIPATH, TechIcon.POWERAUTOMATE, TechIcon.POWERAPPS],
    gallery: [],
    overview: `Full-time, remote out of Chicago. I owned the architecture and development of
    automations built on UiPath, Microsoft Power Automate and Power Apps, working across teams with
    analysts and stakeholders to keep release schedules on track. The role spanned the whole
    lifecycle - requirements gathering, build, maintenance and support.
    I also managed a small pod of automation developers on special projects for the Finance
    division.`,
  },
  {
    id: 4,
    title: "Consultant - Slalom",
    date: "Aug 2022 - Sep 2023",
    gitURL: "",
    techstack: [TechIcon.UIPATH, TechIcon.POWERAUTOMATE, TechIcon.CHATGPT],
    gallery: [],
    overview: `Full-time consulting specialising in Intelligent Process Automation, building on the
    UiPath and Power Automate platforms. I developed and deployed automations through the entire
    project lifecycle using Agile methodologies, and delivered training to Fortune 500 clients and
    internal teams on automation development, Center of Excellence practices, and emerging
    automation technology.`,
  },
  {
    id: 5,
    title: "Information Systems Analyst - Consumers Credit Union",
    date: "Nov 2019 - Aug 2022",
    gitURL: "",
    techstack: [TechIcon.UIPATH, TechIcon.POWERAUTOMATE, TechIcon.SQL],
    gallery: [],
    overview: `Full-time in the Greater Chicago Area. I supported and managed the credit union's
    core financial system alongside a small team, which included employee troubleshooting, testing and installing updates, and working
    with outside vendors. Alongside that I developed the automation programs that put departments
    onto RPA, using UiPath Studio Pro and StudioX, Microsoft Power Automate and Automic Automation.
    This is where I started cutting my teeth with automation and set the tone for my career so far.`,
  },
  {
    id: 6,
    title: "Various others",
    date: "2013 - 2020",
    gitURL: "",
    techstack: [TechIcon.PHOTOSHOP, TechIcon.HTML, TechIcon.CSS],
    gallery: [],
    overview: `The route in, roughly in reverse. Enumerator for the U.S. Census Bureau (Jul - Oct
    2020), a part-time stint verifying addresses and collecting 2020 Census responses in the field.
    Coordinator of Digital Evangelization and Outreach at St. Paul the Apostle Parish in Gurnee, IL
    (Jul 2018 - Nov 2019), maintaining the parish's whole technical footprint - WiFi, website,
    social media, projection and sound at Masses - and building a multi-camera live streaming setup
    so home-bound parishioners could still attend. PC Technician at Abbott (Nov 2017 - Jul 2018),
    running daily operations for the Managed Print Services program and keeping the device
    inventory honest. Help Desk Analyst at NCOIT Inc (Sep 2016 - Nov 2017), first response on the
    ticketing system, system imaging and general support.

    Before that, Saint Leo University: Information Security Intern (Jan - May 2016), auditing
    university servers for vulnerabilities alongside the InfoSec team; Resident Assistant (Aug 2013
    - May 2016), running two resident events a month for nearly three years; and Student Tutor
    (Sep - Dec 2014) in computer information systems and theology. Plus a summer at NetWeaver
    Software in Cocoa, FL (May - Aug 2015), a startup doing online reservations, where I built and
    documented an Apache server, ran QA and systems testing, and made logos, gift certificates and
    instructional videos in Photoshop and Final Cut Pro.`,
  },
  {
    id: 7,
    title: "Windows XP Personal Website",
    date: "2025 - Present",
    gitURL: "https://github.com/geepee123/winxpsite",
    techstack: [
      TechIcon.TYPESCRIPT,
      TechIcon.NEXTJS,
      TechIcon.REDUX,
      TechIcon.CSS,
      TechIcon.HTML,
      TechIcon.JAVASCRIPT,
    ],
    gallery: [],
    overview: `The site you are looking at right now. It is a personal portfolio built to look and
    behave like Windows XP - draggable windows, a working start menu, a taskbar, and a genuinely
    functional copy of Paint. Built with Next.js, TypeScript and Redux, forked from firwer's
    excellent winxpsite template and then rebuilt around my own content. There is something fitting
    about presenting a career spent automating modern systems inside an operating system from 2001.`,
  },
  {
    id: 8,
    title: "Wrath of Verath",
    date: "2026",
    gitURL: "https://github.com/geepee123/Wrath-of-Verath",
    techstack: [TechIcon.GODOT],
    gallery: [],
    overview: `A game project built in Godot with GDScript. Made to be a Slay the Spire clone but wanted to do something with giant mechas.
    Who doesn't love giant mechas? Angels?`,
  },
  {
    id: 9,
    title: "AWS Certified DevOps Engineer - Professional",
    date: "May 2026 - May 2029",
    gitURL:
      "https://www.credly.com/badges/31e3052c-3c02-47b4-b974-1e11135abb1c/public_url",
    techstack: [TechIcon.AWS, TechIcon.LAMBDA, TechIcon.DOCKER],
    gallery: [],
    overview: `The AWS Certified DevOps Engineer - Professional certification, covering continuous
    delivery, infrastructure as code, monitoring and incident response on AWS. Valid through
    May 2029.`,
  },
  {
    id: 10,
    title: "AWS Certified AI Practitioner",
    date: "2025",
    gitURL:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/442b110c471243a3b4227442aa4bb46f",
    techstack: [TechIcon.AWS, TechIcon.CHATGPT],
    gallery: [],
    overview: `The AWS Certified AI Practitioner certification, covering the fundamentals of
    artificial intelligence, machine learning and generative AI on AWS, along with responsible AI
    practices and the AWS services that support them.`,
  },
  {
    id: 11,
    title: "UiPath Automation Developer Associate",
    date: "October 2024",
    gitURL:
      "https://credentials.uipath.com/1418662c-423a-4a5e-baea-b7ec890d9385#acc.KacNEOs8",
    techstack: [TechIcon.UIPATH],
    gallery: [],
    overview: `The UiPath Automation Developer Associate certification, validating core skills in
    designing, building and debugging automation workflows with UiPath Studio.`,
  },
  {
    id: 12,
    title: "UiPath Certified Advanced RPA Developer",
    date: "October 2022",
    gitURL:
      "https://credentials.uipath.com/a4b0ba2e-d0bd-427f-814c-d07740b55daa#acc.AVubnjKX",
    techstack: [TechIcon.UIPATH],
    gallery: [],
    overview: `The UiPath Certified Advanced RPA Developer certification, validating advanced skills
    in building robust, production-grade automations and applying UiPath best practices.`,
  },
  {
    id: 13,
    title: "UiPath Automation Business Analyst Associate",
    date: "November 2024",
    gitURL:
      "https://credentials.uipath.com/253f45ee-137e-48a5-a373-bac2bff93ef6#acc.6ifSDrLd",
    techstack: [TechIcon.UIPATH],
    gallery: [],
    overview: `The UiPath Automation Business Analyst Associate certification, validating the
    ability to capture automation requirements, map processes and bridge business and development
    teams on RPA projects.`,
  },
  {
    id: 14,
    title: "Microsoft Certified: Azure Fundamentals",
    date: "June 2023",
    gitURL:
      "https://www.credly.com/badges/00310042-17d7-41c6-82ec-9bc30588da2a/public_url",
    techstack: [TechIcon.AZURE],
    gallery: [],
    overview: `Microsoft Certified: Azure Fundamentals, covering foundational knowledge of cloud
    services and how they are delivered on Microsoft Azure.`,
  },
  {
    id: 15,
    title: "Matillion ETL Foundations",
    date: "January 2023 - January 2026",
    gitURL:
      "https://www.credly.com/badges/d26b485e-6bd3-4395-88e4-3de15ad11083/public_url",
    techstack: [TechIcon.MATILLION, TechIcon.SQL],
    gallery: [],
    overview: `The Matillion ETL Foundations certification, covering extracting, migrating and
    transforming data in the cloud using Matillion ETL. This credential expired in January 2026.`,
  },
  {
    id: 16,
    title: "Education & Awards",
    date: "2012 - 2024",
    gitURL: "",
    techstack: [TechIcon.PHOTOSHOP],
    gallery: [],
    overview: `Studied at Saint Leo University from 2012 to 2016, taking part in the Honors Program,
    the InfoSec Club, the Computer Club, the Career Planning Advisory Board and the Residence Life
    LLC Committee. Took first place in the Saint Leo CTF Challenge in March 2016, was a YVAIN
    Scholarship Finalist in 2014, and am an Eagle Scout. I additionally finished my MBA in 2024 from WGU.
    Further back, I earned an Adobe Certified Associate in Photoshop CS5 (2011).`,
  },
];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.PROFESSIONAL,
    icon: file,
    title: "TTEC Digital - Principal Consultant",
    content: WorkData[0],
  },
  {
    id: 2,
    type: WorkType.PROFESSIONAL,
    icon: file,
    title: "Infocap AI - Agentic Automation",
    content: WorkData[1],
  },
  {
    id: 3,
    type: WorkType.PROFESSIONAL,
    icon: file,
    title: "Exelon - Sr. Service Analyst",
    content: WorkData[2],
  },
  {
    id: 4,
    type: WorkType.PROFESSIONAL,
    icon: file,
    title: "Slalom - Consultant",
    content: WorkData[3],
  },
  {
    id: 5,
    type: WorkType.PROFESSIONAL,
    icon: file,
    title: "Consumers CU - IS Analyst",
    content: WorkData[4],
  },
  {
    id: 6,
    type: WorkType.PROFESSIONAL,
    icon: file,
    title: "Various others",
    content: WorkData[5],
  },
  {
    id: 7,
    type: WorkType.PERSONAL,
    icon: file,
    title: "Windows XP Personal Website",
    content: WorkData[6],
  },
  {
    id: 8,
    type: WorkType.PERSONAL,
    icon: file,
    title: "Wrath of Verath",
    content: WorkData[7],
  },
  {
    id: 9,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "AWS DevOps Engineer - Professional",
    content: WorkData[8],
  },
  {
    id: 10,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "AWS AI Practitioner",
    content: WorkData[9],
  },
  {
    id: 11,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "UiPath Automation Developer Associate",
    content: WorkData[10],
  },
  {
    id: 12,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "UiPath Advanced RPA Developer",
    content: WorkData[11],
  },
  {
    id: 13,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "UiPath Business Analyst Associate",
    content: WorkData[12],
  },
  {
    id: 14,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "Microsoft Azure Fundamentals",
    content: WorkData[13],
  },
  {
    id: 15,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "Matillion ETL Foundations",
    content: WorkData[14],
  },
  {
    id: 16,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "Education & Awards",
    content: WorkData[15],
  },
];

export const PhotoCollection: GalleryImage[] = [];
