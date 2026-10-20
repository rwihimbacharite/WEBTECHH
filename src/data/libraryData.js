import { Armchair, BookOpen, GraduationCap, Wifi } from "lucide-react";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Featured books", href: "/books" },
  { label: "Contact us", href: "/contact" },
];

export const services = [
  {
    icon: BookOpen,
    number: "01",
    title: "Book borrowing and returns",
    description:
      "Choose books to take home, renew your favorites, or return books at the library desk.",
  },
  {
    icon: Wifi,
    number: "02",
    title: "Internet and computer access",
    description:
      "Use a library computer and free internet for homework, job searches, and everyday tasks.",
  },
  {
    icon: Armchair,
    number: "03",
    title: "Reading and study spaces",
    description:
      "Find a comfortable spot to read, study, or work quietly on your own or with friends.",
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Workshops and literacy programs",
    description:
      "Join learning workshops, reading groups, and programs that help children and adults build skills.",
  },
];

export const events = [
  {
    day: "24",
    month: "OCT",
    date: "Saturday, October 24, 2026",
    category: "CHILDREN & FAMILIES",
    title: "Children’s storytelling session",
    detail:
      "Enjoy a few fun read-aloud stories together. Children of all ages are welcome with a grown-up.",
    time: "10:30 am",
  },
  {
    day: "26",
    month: "OCT",
    date: "Monday, October 26, 2026",
    category: "READING COMPETITION",
    title: "Bright Future reading challenge",
    detail:
      "Choose a short passage and share your reading with the group. A friendly activity for young readers.",
    time: "11:00 am",
  },
  {
    day: "30",
    month: "OCT",
    date: "Friday, October 30, 2026",
    category: "COMMUNITY WORKSHOP",
    title: "Community literacy workshop",
    detail:
      "Practice everyday reading and writing skills in a welcoming group. Everyone is invited.",
    time: "2:00 pm",
  },
];

export const books = [
  {
    title: "The Creative Act",
    author: "Rick Rubin",
    category: "IDEAS & INSPIRATION",
    description:
      "A thoughtful guide to noticing ideas and making room for creativity in everyday life.",
    color: "peach",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "Braiding Sweetgrass",
    author: "Robin Wall Kimmerer",
    category: "NATURE & BELONGING",
    description:
      "Stories that connect the natural world, Indigenous knowledge, and the ways we care for one another.",
    color: "sage",
    cover:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    category: "A STORY TO SHARE",
    description:
      "A curious young traveler meets new friends and discovers what matters most in this beloved story.",
    color: "blue",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=85",
  },
];
