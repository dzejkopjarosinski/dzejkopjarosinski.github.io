import type { WorkBrandId } from "./company-brands";

export const person = {
  name: "Jakub Jarosiński",
  titleLines: [
    "Data Engineer",
    "Problem Solver",
    "Software Developer",
    "Cloud Expert",
    "DevOps",
    "AI Engineer",
  ],
  email: "jarosinskijac@gmail.com",
  github: "https://github.com/dzejkopjarosinski",
  linkedin: "https://www.linkedin.com/in/jakub-jarosi%C5%84ski/",
  harvium: "https://www.harvium.pl/",
  profileImage: "/images/profile-pic.png",
  heroImage: "/images/cover_bg_3.jpg",
};

export const about = {
  greeting: "Hello there",
  paragraphs: [
    `Welcome to my website. I am an experienced Data Engineer and Software Developer. I have a range of experience working with startups and large international organizations. Currently I'm building reliable data pipelines, agentic workflows and backend services for internal corporate needs. I also lead technical development at the commodity trading startup harvium.pl.`,
    `Outside of work I like digging into Cloud Platforms, AI, solid engineering practices, and finance.`,
  ],
  techStack: [
    "Linux",
    "Python",
    "TypeScript",
    "Java",
    "Hadoop",
    "Spark",
    "Databricks",
    "Airflow",
    "FastAPI",
    "React",
    "Node",
    "SQL",
    "PostgreSQL",
    "Kafka",
    "RabbitMQ",
    "LLMs",
    "Langchain",
    "MySQL",
    "MongoDB",
    "Docker",
    "Azure",
    "AWS"
  ],
};

export type TimelineItem = {
  role: string;
  org: string;
  employmentType?: string;
  period: string;
  bullets: string[];
  side: "left" | "right";
  brandId: WorkBrandId;
};

export const experience: TimelineItem[] = [
  {
    role: "Data Engineer",
    org: "EY",
    employmentType: "Contract",
    brandId: "ey",
    period: "04.2024 — present",
    bullets: [
      "Optimizing ETL processes",
      "SQL & Python development",
      "Airflow orchestration",
      "System architecture design",
      "OpenSearch and data backends for internal tools",
    ],
    side: "right",
  },
  {
    role: "Data Engineer",
    org: "Uniqa Insurance Group",
    employmentType: "Contract",
    brandId: "uniqa",
    period: "08.2024 — 03.2025",
    bullets: [
      "Data lake work: Hadoop, Spark, Airflow, YARN, Hue, PostgreSQL, Oracle",
      "Python with Spark, Pandas, PySpark",
      "Developing pipelines in Airflow",
    ],
    side: "left",
  },
  {
    role: "Data Engineer",
    org: "Polkomtel",
    brandId: "polkomtel",
    period: "09.2022 — 07.2024",
    bullets: [
      "Data analysis and operational reporting",
      "ETL optimization, SQL, Python, Java",
      "Spark, NiFi, Kafka, Airflow",
      "System architecture, Agile delivery",
      "Power BI, Tableau",
    ],
    side: "right",
  },
  {
    role: "Data Analyst (Finance)",
    org: "Franklin Templeton Investments",
    brandId: "franklin",
    period: "09.2021 — 04.2022",
    bullets: [
      "Data and financial analysis",
      "Python automation, SQL",
      "Analytics in Python, R, Jupyter",
      "Power BI",
    ],
    side: "left",
  },
  {
    role: "QA Engineer",
    org: "Match-Trade Technologies",
    brandId: "matchtrade",
    period: "10.2020 — 03.2021",
    bullets: [
      "Database administration",
      "Data analysis and reporting",
      "Process automation in Python",
      "A/B testing and automated testing",
      "Unit testing",
    ],
    side: "right",
  },
  {
    role: "Equity Trader",
    org: "Traderhouse.pl",
    brandId: "traderhouse",
    period: "05.2020 — 09.2020",
    bullets: [
      "Equity trading on NASDAQ & NSE",
      "Scanning for opportunities and executing strategy",
      "Fundamental and technical analysis",
      "Working with financial data and databases",
    ],
    side: "left",
  },
  {
    role: "Marketing Specialist / Web Developer",
    org: "Dive in life",
    brandId: "dive",
    period: "02.2020 — 12.2021",
    bullets: [
      "SEO, external contacts, marketing strategy",
      "REST APIs in Node.js",
      "Full-stack work with React and Node",
      "Python automation",
    ],
    side: "right",
  },
  {
    role: "Sales Representative",
    org: "Southwestern Advantage",
    brandId: "southwestern",
    period: "04.2019 — 08.2019",
    bullets: [
      "Door-to-door sales and CRM",
      "Community relations and sales strategy",
    ],
    side: "left",
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  notes: string[];
  side: "left" | "right";
};

export const education: EducationItem[] = [
  {
    degree: "Masters - Computer Science and Econometrics",
    school: "Poznań University of Business & Economics",
    period: "2021 — 2023",
    notes: [
      "Scholarship for the best students (2021, 2022)",
      "Student exchange at the University of Ljubljana",
    ],
    side: "right",
  },
  {
    degree: "Masters in Law",
    school: "Adam Mickiewicz University",
    period: "2019 — 2021",
    notes: ["Completed six semesters in one year while working full time",
      "Droped out to pursue career and studies in Computer Science",
    ],
    side: "left",
  },
  {
    degree: "Bachelors - Economics",
    school: "Poznań University of Business & Economics",
    period: "2018 — 2021",
    notes: [
      "Member and contributor: SKN Pryzmat, SKN Profit, SKN Portfolio",
      "Scholarship for the best students (2020)",
    ],
    side: "right",
  },
];

export type Project = {
  title: string;
  tag: string;
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Car tracking software",
    tag: "Software",
    href: "/project1/index.html",
    image: "/images/Car_Tracking_Pic.jpg",
  },
  {
    title: "BTC Investment Strategy Comparison",
    tag: "Data analysis",
    href: "/project2/index.html",
    image: "/images/BTC_Strategy-Picture.jpg",
  },
  {
    title: "Image to Sketch Converter",
    tag: "Software",
    href: "/project3/index.html",
    image: "/images/maxresdefault.jpg",
  },
  {
    title: "JS Clock App",
    tag: "Design",
    href: "/project4/index.html",
    image: "/images/Clockapp.png",
  },
  {
    title: "Equity Portfolio Return Analyzer",
    tag: "Finance",
    href: "/project5/index.html",
    image: "/images/4.jpg",
  },
  {
    title: "Harvium",
    tag: "Full stack",
    href: "/project6/index.html",
    image: "/images/Harvium-Banner.jpg",
  },
  {
    title: "Calculator App in Java",
    tag: "Java",
    href: "/project7/index.html",
    image: "/images/Java-calculator.jpg",
  },
  {
    title: "CFA Research Challenge",
    tag: "Finance",
    href: "/project8/index.html",
    image: "/images/CFA-research.jpg",
  },
];
