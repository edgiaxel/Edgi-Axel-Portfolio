export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "pos-indonesia",
    role: "Assistant Account Manager Intern",
    organization: "Pos Indonesia, Bandung Branch",
    location: "Bandung, West Java, Indonesia",
    period: "March 2026 – June 2026",
    highlights: [
      "Assisted account management operations through daily transaction data retrieval, document preparation, and spreadsheet organization.",
      "Maintained and organized transaction records and supporting documentation using Excel and Google Sheets.",
      "Developed a Python script to clean and transform CSV data, reducing repetitive manual data preparation and improving the efficiency of spreadsheet workflows.",
      "Supported administrative and operational activities across documentation and customer accounts.",
    ],
  },
  {
    id: "tutor-9to5",
    role: "Extracurricular Mathematics Tutor",
    organization: "9to5",
    location: "Bandung, Indonesia",
    period: "2024 – 2025",
    highlights: [
      "Taught elementary school students fundamental mathematical concepts and problem-solving techniques.",
      "Prepared learning exercises, practice tests, and structured homework materials.",
      "Supported students through individual learning sessions tailored to specific progress goals.",
    ],
  },
  {
    id: "board-game-master",
    role: "Board Game Master",
    organization: "Nakama Board Game Café",
    location: "Bandung, Indonesia",
    period: "June 2023 – August 2023",
    highlights: [
      "Introduced and explained board game mechanics and rules to customers.",
      "Facilitated gameplay sessions and answered real-time strategic and rule questions.",
      "Assisted customer service and coordinated front-of-house operations.",
    ],
  },
];
