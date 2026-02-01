export type Course = {
  title: string;
  slug: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  lessons: number;
};

export const courses: Course[] = [
  {
    title: "Web Development Basics",
    slug: "web-development-basics",
    level: "Beginner",
    description: "HTML, CSS, Git, and the basics of building websites.",
    lessons: 12,
  },
  {
    title: "JavaScript for Beginners",
    slug: "javascript-for-beginners",
    level: "Beginner",
    description: "Variables, functions, arrays, objects, and DOM practice.",
    lessons: 18,
  },
  {
    title: "Next.js Study Portal",
    slug: "nextjs-study-portal",
    level: "Intermediate",
    description: "Routing, layouts, and a clean portal UI structure.",
    lessons: 15,
  },
];
