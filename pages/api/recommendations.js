// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Express Post",
    image: "images/user.jpg",
    designation: "React JS | NEXT JS | Node | GraphQL",
    view: "Hi, I wanted to share my experience working on an Express.js-based application that I recently built. This project gave me the opportunity to design and develop a scalable backend using Node.js and Express.js, where I implemented features like RESTful APIs, authentication, middleware handling, and database integration. Through this project, I deepened my understanding of backend architecture, route management, and error handling.",
    linkednURL: "https://github.com/Itsmeami/ExpressPost",
  },
  {
    id: 1,
    name: "DataSlate",
    image: "images/user.jpg",
    designation: "EJS | Node.js | Express",
    view: "I had the opportunity to work extensively on DataSlate, a robust platform we developed using Node.js, Express, and EJS. Throughout the project, I was impressed by how well these technologies came together to build a fast, reliable, and scalable system. From designing dynamic EJS templates to building efficient backend routes with Express, every part of the stack contributed to a seamless user experience..",
    linkednURL: "https://github.com/Itsmeami/DataSlate",
  },
  
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
