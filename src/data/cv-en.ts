import { profileData } from "@/data/profile";
import { experienceData, type ExperienceItem } from "@/data/experience";
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
  details: string[];
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
  experience: ExperienceItem[];
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
    period: "September 2023 – Expected 2027",
    gpa: "3.94 / 4.00",
    details: [
      "Concentration: Mobile Apps and Software Engineering",
      "Current standing: Seventh semester",
      "Undergraduate Thesis (In Progress): Comparative study of DQN, PPO, and A2C reinforcement learning algorithms in a custom turn-based card game environment.",
    ],
  },
  experienceTitle: "Experience",
  experience: experienceData,
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
      skills: ["SQL", "PostgreSQL", "Supabase", "MySQL", "MariaDB", "MongoDB Atlas"],
    },
    {
      title: "AI & Machine Learning",
      skills: ["PyTorch", "NumPy", "pandas", "scikit-learn", "Reinforcement Learning (DQN, PPO, A2C)", "Ollama", "Local LLMs"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Vercel", "Render", "Cloudflare Tunnels", "Linux"],
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
