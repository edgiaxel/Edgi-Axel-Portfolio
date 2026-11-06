import { profileData } from "@/data/profile";
import { projectsData, type Project } from "@/data/projects";

export interface CVSkillCategory {
  title: string;
  skills: string[];
}

export interface CVEducation {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  concentration?: string;
  thesis?: string;
  details: string[];
}

export interface CVExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface CVContent {
  header: {
    fullName: string;
    title: string;
    location: string;
    email: string;
    domain: string;
    github: string;
    linkedin: string;
  };
  summaryTitle: string;
  summary: string;
  educationTitle: string;
  education: CVEducation;
  experienceTitle: string;
  experience: CVExperienceItem[];
  selectedProjectsTitle: string;
  selectedProjects: Project[];
  skillsTitle: string;
  skillCategories: CVSkillCategory[];
  leadershipTitle: string;
  leadership: {
    role: string;
    organization: string;
    highlights: string[];
  };
  languagesTitle: string;
  languages: {
    name: string;
    level: string;
  }[];
}

const selectedFeaturedProjects = projectsData.filter((p) =>
  ["rigcheck", "slidescribe", "yourpaddock", "ghostwave", "rl-card-game-thesis"].includes(p.id)
);

export const cvEnData: CVContent = {
  header: {
    fullName: profileData.fullName,
    title: profileData.title,
    location: profileData.location,
    email: profileData.email,
    domain: profileData.domain,
    github: "https://github.com/edgiaxel",
    linkedin: "https://www.linkedin.com/in/edgi-axel-limandibrata-7409bb206/",
  },
  summaryTitle: "Professional Summary",
  summary:
    "Software Engineering student at STMIK LIKMI with experience developing full-stack web applications, APIs, and databases. Actively exploring artificial intelligence through local LLM integrations, vision inference, and reinforcement learning research. Complementary background in digital media production and creative technology.",
  educationTitle: "Education",
  education: {
    institution: "STMIK LIKMI, Bandung",
    degree: "Bachelor of Informatics / Software Engineering",
    period: "Sept 2023 - Expected 2027",
    gpa: "3.94 / 4.00",
    concentration: "Mobile Apps and Software Engineering",
    thesis:
      "Undergraduate Thesis (In Progress): Comparative study of DQN, PPO, and A2C reinforcement learning algorithms in a custom turn-based card game environment.",
    details: [
      "Concentration: Mobile Apps and Software Engineering",
      "Current standing: Seventh semester",
      "Undergraduate Thesis (In Progress): Comparative study of DQN, PPO, and A2C reinforcement learning algorithms in a custom turn-based card game environment.",
    ],
  },
  experienceTitle: "Experience",
  experience: [
    {
      id: "pos-indonesia",
      role: "Assistant Account Manager Intern",
      organization: "Pos Indonesia, Bandung Branch",
      location: "Bandung, Indonesia",
      period: "March 2026 - June 2026",
      highlights: [
        "Assisted account management operations through daily transaction data retrieval, document preparation, and spreadsheet organization.",
        "Maintained and organized transaction records and supporting documentation using Excel and Google Sheets.",
        "Developed a Python script to clean and transform CSV data, reducing repetitive manual data preparation and improving the efficiency of spreadsheet workflows.",
        "Supported operational documentation and customer account administration.",
      ],
    },
    {
      id: "tutor-9to5",
      role: "Extracurricular Mathematics Tutor",
      organization: "9to5",
      location: "Bandung, Indonesia",
      period: "2024 - 2025",
      highlights: [
        "Taught elementary school students fundamental mathematical concepts and problem-solving techniques.",
        "Prepared structured learning exercises, practice tests, and homework materials.",
      ],
    },
    {
      id: "board-game-master",
      role: "Board Game Master",
      organization: "Nakama Board Game Café",
      location: "Bandung, Indonesia",
      period: "June 2023 - August 2023",
      highlights: [
        "Introduced and explained board game mechanics and rules to customers.",
        "Facilitated gameplay sessions and coordinated front-of-house customer service.",
      ],
    },
  ],
  selectedProjectsTitle: "Selected Technical Projects",
  selectedProjects: selectedFeaturedProjects,
  skillsTitle: "Technical Competencies",
  skillCategories: [
    {
      title: "Frontend & Web",
      skills: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Vite"],
    },
    {
      title: "Backend & Systems",
      skills: ["Python", "FastAPI", "PHP", "Laravel", "Java", "REST APIs", "Node.js (Exposure)"],
    },
    {
      title: "Data & Storage",
      skills: ["PostgreSQL", "Supabase", "MySQL", "MariaDB", "MongoDB Atlas", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      skills: ["PyTorch", "scikit-learn", "Pandas", "NumPy", "Reinforcement Learning (DQN, PPO, A2C)", "Ollama", "Local LLMs"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Linux", "Vercel", "Render", "Cloudflare Tunnels"],
    },
  ],
  leadershipTitle: "Leadership & Activities",
  leadership: {
    role: "President",
    organization: "Computer and Electronic Student Club, STMIK LIKMI",
    highlights: [
      "Led student club initiatives, coordinated technical learning sessions, and supervised organizational planning and member activities.",
    ],
  },
  languagesTitle: "Languages",
  languages: [
    { name: "Indonesian", level: "Native proficiency" },
    { name: "English", level: "Professional working proficiency" },
    { name: "Sundanese", level: "Conversational proficiency" },
  ],
};
