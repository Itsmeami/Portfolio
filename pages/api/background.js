const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Sunderdeep Engineering College(Affliated AKTU)",
        degree: "B.TECH, Bachelor of Technology",
        detail:
          "Bachelor's Degree in Computer Science and Engineering from Ghaziabad Uttar Pradesh.",
        year: "2021-2025",
      },
      {
        id: 1,
        title: "Maa Tripur Sundari Public school",
        degree: "Senior Secondary (12th)",
        detail: "Completed 12th from Mirzapur Uttar Pradesh.",
        year: "2020-2021",
      },
      {
        id: 2,
        title: "Maa Tripur sundari Public School",
        degree: "SSC, Secondary School Certificate(High School)",
        detail: "Completed SSC  Science subjects from Mirzapur Uttar Pradesh",
        year: "2018-2019",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Bitchief Technology Servied Private Limited",
        role: "Software Developer",
        url: "https://www.bitchief.com/",
        desc: "As a fullstack developer, I use React, Node.js & Express to build user interfaces for web applications.",
        year: "03/2025 - Present",
        location: "India, Gurugram",
      },
      {
        id: 2,
        title: "Mobiloitte",
        role: "Software Developer Intern",
        url: "https://www.mobiloitte.com/",
        desc: "As an Internee, I learned how to use React Native & JavaScript to build interactive Apps.",
        year: "01/2025 - 03/2025",
        location: "Ohakla Phase 1, Delhi",
      },
      {
        id: 3,
        title: "MangoOrange",
        role: "Software Developer Intern",
        url: "https://mangosorange.co.in/",
        desc: "I work there as a Fullstack Developer, there I learned how to do CRUD'S operations in Node.js, also I worked on Frontend",
        year: "07/2024 - 10/2024",
        location: "sector 62, Nodia",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
