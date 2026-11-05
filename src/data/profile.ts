export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export interface Profile {
  fullName: string;
  preferredName: string;
  title: string;
  location: string;
  email: string;
  domain: string;
  bio: {
    en: {
      short: string;
      professional: string;
    };
    id: {
      short: string;
      professional: string;
    };
  };
  education: {
    institution: string;
    degree: string;
    concentration: string;
    period: string;
    expectedGraduation: string;
    standing: string;
    gpa: string;
  };
  interests: string[];
  socialLinks: SocialLink[];
}

export const profileData: Profile = {
  fullName: "Edgi Axel Limandibrata",
  preferredName: "Edgi Axel",
  title: "Web Developer | AI/ML Enthusiast | Creative Technology",
  location: "Bandung, West Java, Indonesia",
  email: "xgv1807@gmail.com",
  domain: "https://edgiaxel.tech",
  bio: {
    en: {
      short:
        "Software Engineering student exploring AI/ML, web applications, and creative technology. Building practical products and local AI integrations.",
      professional:
        "Software Engineering student at STMIK LIKMI with interests in web development, artificial intelligence, machine learning, and creative technology. Builds web, mobile, and desktop applications, experiments with AI-powered systems and reinforcement learning, and maintains a background in digital art and Live2D rigging.",
    },
    id: {
      short:
        "Mahasiswa Rekayasa Perangkat Lunak yang mendalami AI/ML, pengembangan aplikasi, dan teknologi kreatif. Berfokus pada pengembangan proyek serta aplikasi cerdas.",
      professional:
        "Mahasiswa jurusan Mobile Apps and Software Engineering di STMIK LIKMI dengan minat pada pengembangan perangkat lunak, kecerdasan buatan, machine learning, dan teknologi kreatif. Mengembangkan aplikasi web, mobile, dan desktop, bereksperimen dengan sistem berbasis AI dan reinforcement learning, serta memiliki latar belakang dalam digital art dan Live2D rigging.",
    },
  },
  education: {
    institution: "STMIK LIKMI",
    degree: "Bachelor of Informatics / Software Engineering",
    concentration: "Mobile Apps and Software Engineering",
    period: "September 2023 – Expected 2027",
    expectedGraduation: "2027",
    standing: "Seventh semester",
    gpa: "3.94 / 4.00",
  },
  interests: [
    "Full-Stack Web Development",
    "Artificial Intelligence and Machine Learning",
    "Reinforcement Learning and Intelligent Agents",
    "Local AI and Vision Inference",
    "Developer Tools and Workflows",
    "Creative Technology and Live2D Rigging",
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/edgiaxel",
      label: "GitHub profile and repositories",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/edgi-axel-limandibrata-7409bb206/",
      label: "LinkedIn professional profile",
    },
    {
      name: "DEV",
      url: "https://dev.to/edgiaxel",
      label: "DEV Community profile",
    },
    {
      name: "Devpost",
      url: "https://devpost.com/xgv1807",
      label: "Devpost hackathon profile",
    },
    {
      name: "Hugging Face",
      url: "https://huggingface.co/edgiaxel",
      label: "Hugging Face model and dataset profile",
    },
  ],
};
