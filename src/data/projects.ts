export type ProjectCategory = "featured" | "academic" | "jam";
export type ProjectStatus = "Completed" | "In Progress" | "Prototype";

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
  notes?: string;
}

export const projectsData: Project[] = [
  {
    id: "rigcheck",
    title: "RigCheck",
    summary: "Privacy-first PC hardware compatibility assistant with local vision AI.",
    description:
      "Privacy-first PC hardware component compatibility assistant powered by local Gemma 3 4B vision inference via Ollama. Evaluates power supply capacity, socket compatibility, and form factor clearance without cloud photo uploads.",
    category: "featured",
    status: "Completed",
    technologies: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Ollama", "Gemma 3 4B", "Render"],
    githubUrl: "https://github.com/edgiaxel/RigCheck",
    liveUrl: "https://rigcheck-frontend.onrender.com",
    isFeatured: true,
  },
  {
    id: "slidescribe",
    title: "SlideScribe",
    summary: "AI-assisted study companion turning lecture slides and audio into grounded notes.",
    description:
      "Synthesizes PDF slides and audio recordings into structured study notes with verified slide and timestamp citations, interactive quizzes, flashcards, and local Gemma inference via Ollama.",
    category: "featured",
    status: "Completed",
    technologies: ["React 19", "TypeScript", "Vite", "Tiptap", "FastAPI", "MongoDB Atlas", "Ollama", "Gemma 3 4B"],
    githubUrl: "https://github.com/edgiaxel/SlideScribe",
    isFeatured: true,
  },
  {
    id: "yourpaddock",
    title: "Your Paddock",
    summary: "Formula 1 briefing dashboard and development tracker with source verification.",
    description:
      "Motorsport information platform compiling F1 race calendars, standings from Jolpica, and multi-publisher news feeds into verified narrative briefings with claim extraction.",
    category: "featured",
    status: "Completed",
    technologies: ["Python 3.13", "FastAPI", "PostgreSQL", "Neon", "React", "Vite", "Ollama", "Gemma 3 4B"],
    githubUrl: "https://github.com/edgiaxel/YourPaddock",
    isFeatured: true,
  },
  {
    id: "ghostwave",
    title: "GhostWave",
    summary: "Local-first audio player, reactive spectral visualizer, and AI crate curator.",
    description:
      "Offline music player and audio-reactive spectral visualizer running in the browser. Employs local Gemma 3 4B via Ollama for natural language playlist curation without modifying source files.",
    category: "featured",
    status: "Completed",
    technologies: ["Web Audio API", "TypeScript", "React", "Tailwind CSS", "FastAPI", "Ollama", "Gemma 3 4B"],
    githubUrl: "https://github.com/edgiaxel/GhostWave",
    isFeatured: true,
  },
  {
    id: "rl-card-game-thesis",
    title: "Reinforcement Learning Research Environment",
    summary: "Comparative benchmark of DQN, PPO, and A2C in a custom turn-based card game.",
    description:
      "Undergraduate thesis research benchmarking Deep Q-Network (DQN), Proximal Policy Optimization (PPO), and Advantage Actor-Critic (A2C) in a custom turn-based card environment with deterministic action masking.",
    category: "academic",
    status: "In Progress",
    technologies: ["Python", "PyTorch", "NumPy", "Reinforcement Learning", "Gymnasium"],
    isFeatured: true,
    notes: "Undergraduate thesis currently in progress at STMIK LIKMI.",
  },
  {
    id: "pitmate",
    title: "PitMate",
    summary: "Automotive workshop management mobile application with role-based access.",
    description:
      "Mobile workshop operations system designed for single physical workshops. Features multi-role workflows for owners, mechanics, and customers with service tracking, inventory, and cost reporting.",
    category: "academic",
    status: "Completed",
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    isFeatured: false,
  },
  {
    id: "echo-ism",
    title: "ECHO-ISM",
    summary: "2D time-loop puzzle game prototype exploring past-action echo coordination.",
    description:
      "Developed for Checkpoint Game Jam 2026. A 2D top-down puzzle prototype centered on recording actions in earlier loops to cooperate with ghost echoes to operate digital mechanisms.",
    category: "jam",
    status: "Prototype",
    technologies: ["Godot 4.3", "C#", ".NET"],
    githubUrl: "https://github.com/edgiaxel/ECHO-ISM",
    isFeatured: false,
  },
  {
    id: "costume-rental-web",
    title: "Costume Rental Management System",
    summary: "Web-based rental platform with RBAC, CAPTCHA validation, and spreadsheet export.",
    description:
      "Academic web application built for STMIK LIKMI featuring customer management, catalog browsing, role-based access control, security validation, and operational data exports.",
    category: "academic",
    status: "Completed",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/edgiaxel/Costume-Rental-Web",
    isFeatured: false,
  },
  {
    id: "mbg-scheduling-app",
    title: "MBG Scheduling Application",
    summary: "Mobile schedule coordinator with map routing and Supabase data synchronization.",
    description:
      "Academic mobile solution built to manage multi-point logistics and delivery schedules with real-time database syncing and interactive route displays.",
    category: "academic",
    status: "Completed",
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/edgiaxel/MBG-Scheduling-App",
    isFeatured: false,
  },
  {
    id: "wec-score-simulation",
    title: "WEC Race Simulation System",
    summary: "Desktop application calculating endurance racing points and team standings.",
    description:
      "Academic desktop software built with JavaFX and MariaDB simulating World Endurance Championship race event regulations, lap records, and team championship scoring.",
    category: "academic",
    status: "Completed",
    technologies: ["Java", "JavaFX", "MariaDB", "SQL"],
    githubUrl: "https://github.com/edgiaxel/WEC-Score-Simulation",
    isFeatured: false,
  },
];
