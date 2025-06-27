const review = [
  {
    id: 0,
    clientName: "Java",
    clientLocation: "Advanced",
    clientSource: "Leetcode",
    clientReview:
      "I have solved over 1000 problems in Java, which has given me a strong grasp of core concepts like OOP, data structures, and algorithms. This hands-on experience has sharpened my problem-solving skills and deepened my understanding of Java as a reliable, versatile programming language.",
  },
  {
    id: 2,
    clientName: "Node.js",
    clientLocation: "Advanced",
    clientSource: "Bitchief",
    clientReview:
      "I’m currently working as a Backend Developer at Bitchief Technology Services, where I contribute to the design, development, and maintenance of scalable backend systems using Node.js, Express, and PostgreSQL/MongoDB. During my time here, I’ve worked on two major projects ",
  },
  {
    id: 3,
    clientName: "React Native",
    clientLocation: "Good",
    clientSource: "Mobiloitte",
    clientReview:
      "Previously, I worked at Mobiloitte Technologies as a React Native Developer, where I was involved in building and maintaining cross-platform mobile applications. I focused on implementing intuitive UI components, integrating REST APIs, and optimizing app performance for both Android and iOS platforms.",
  },
  {
    id: 4,
    clientName: "Next.js",
    clientLocation: "MangosOrange",
    clientSource: "Good",
    clientReview:
      "At Mango Orange, I worked as a Frontend Developer using Next.js. I was responsible for building fast and SEO-friendly web pages, integrating APIs, and improving the overall user experience. I also worked on making the website responsive and performance-optimized",
  },
];
export default function handler(req, res) {
    res.status(200).json(review)
}
