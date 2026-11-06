import { cvEnData, type CVContent } from "@/data/cv-en";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";

const selectedFeaturedProjects = projectsData.filter((p) =>
  ["rigcheck", "slidescribe", "yourpaddock", "ghostwave", "rl-card-game-thesis"].includes(p.id)
);

export const cvIdData: CVContent = {
  header: {
    fullName: profileData.fullName,
    title: "Pengembang Web | Peminat AI/ML | Teknologi Kreatif",
    location: profileData.location,
    email: profileData.email,
    domain: profileData.domain,
    github: "https://github.com/edgiaxel",
    linkedin: "https://www.linkedin.com/in/edgi-axel-limandibrata-7409bb206/",
  },
  summaryTitle: "Ringkasan Profesional",
  summary:
    "Mahasiswa Rekayasa Perangkat Lunak di STMIK LIKMI dengan pengalaman membangun aplikasi web full-stack, API, dan basis data. Mendalami kecerdasan buatan melalui integrasi LLM lokal, inferensi visi, dan riset reinforcement learning. Memiliki latar tambahan dalam produksi media digital dan teknologi kreatif.",
  educationTitle: "Pendidikan",
  education: {
    institution: "STMIK LIKMI, Bandung",
    degree: "Sarjana Informatika / Rekayasa Perangkat Lunak",
    period: "Sept 2023 - Perkiraan Lulus 2027",
    gpa: "3.94 / 4.00",
    concentration: "Mobile Apps and Software Engineering",
    thesis:
      "Skripsi / Tugas Akhir (Sedang Berjalan): Studi komparatif algoritma reinforcement learning DQN, PPO, dan A2C dalam lingkungan game turn-based berbasis kartu kustom.",
    details: [
      "Konsentrasi: Mobile Apps and Software Engineering",
      "Status akademik: Semester 7",
      "Skripsi / Tugas Akhir (Sedang Berjalan): Studi komparatif algoritma reinforcement learning DQN, PPO, dan A2C dalam lingkungan game turn-based berbasis kartu kustom.",
    ],
  },
  experienceTitle: "Pengalaman Kerja",
  experience: [
    {
      id: "pos-indonesia",
      role: "Assistant Account Manager Intern",
      organization: "Pos Indonesia, Kantor Cabang Bandung",
      location: "Bandung, Jawa Barat, Indonesia",
      period: "Maret 2026 - Juni 2026",
      highlights: [
        "Mendukung operasional pengelolaan akun mitra melalui penarikan data transaksi harian, persiapan dokumen, dan pengorganisasian spreadsheet.",
        "Mengelola dan merapikan catatan transaksi serta arsip pendukung menggunakan Excel dan Google Sheets.",
        "Mengembangkan skrip Python untuk pembersihan dan transformasi data CSV otomatis guna meningkatkan efisiensi alur kerja spreadsheet.",
        "Membantu aktivitas operasional dokumen pendukung dan administrasi akun.",
      ],
    },
    {
      id: "tutor-9to5",
      role: "Tutor Matematika Ekstrakurikuler",
      organization: "9to5",
      location: "Bandung, Indonesia",
      period: "2024 - 2025",
      highlights: [
        "Mengajar materi dasar matematika dan logika hitung untuk siswa sekolah dasar.",
        "Menyusun lembar latihan terstruktur dan tugas evaluasi belajar berkala.",
      ],
    },
    {
      id: "board-game-master",
      role: "Board Game Master",
      organization: "Nakama Board Game Café",
      location: "Bandung, Indonesia",
      period: "Juni 2023 - Agustus 2023",
      highlights: [
        "Memperkenalkan serta menjelaskan aturan dan alur bermain board game kepada pelanggan.",
        "Memfasilitasi jalannya sesi permainan dan menjawab pertanyaan strategi aturan bermain.",
      ],
    },
  ],
  selectedProjectsTitle: "Proyek Teknis Terpilih",
  selectedProjects: selectedFeaturedProjects,
  skillsTitle: "Keahlian Teknis",
  skillCategories: cvEnData.skillCategories,
  leadershipTitle: "Kepemimpinan & Organisasi",
  leadership: {
    role: "Ketua",
    organization: "Computer and Electronic Student Club, STMIK LIKMI",
    highlights: [
      "Memimpin program kerja klub mahasiswa, mengoordinasikan workshop teknis, dan mengelola perencanaan kegiatan organisasi.",
    ],
  },
  languagesTitle: "Kemampuan Bahasa",
  languages: [
    { name: "Bahasa Indonesia", level: "Penutur Asli (Native)" },
    { name: "Bahasa Inggris", level: "Kecakapan Kerja Profesional (Working Proficiency)" },
    { name: "Bahasa Sunda", level: "Percakapan Lancar (Conversational)" },
  ],
};
