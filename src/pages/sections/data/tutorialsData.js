

const baseArticle = `
This tutorial helps you understand and improve your mental state step by step.

Key ideas:
- Awareness is the first step
- Practice is more important than theory
- Small progress is still progress

Take your time, reflect, and apply what you learn.
`;

const baseQuiz = [
  {
    question: "What is the most important step?",
    options: ["Ignoring the problem", "Awareness", "Waiting"],
    correctAnswer: "Awareness"
  }
];

const baseResource = [
  {
    title: "Watch on YouTube",
    link: "https://www.youtube.com/watch?v=ZToicYcHIOU"
  }
];

const categories = {
  Emotions: [
    "Managing Anger",
    "Overcoming Fear",
    "Coping with Sadness",
    "Dealing with Guilt",
    "Handling Frustration"
  ],
  "Mental Health": [
    "Dealing with Anxiety",
    "Overcoming Depression",
    "Stress Management",
    "Burnout Recovery",
    "Emotional Stability"
  ],
  "Self Development": [
    "Building Confidence",
    "Self Discipline",
    "Positive Thinking",
    "Self Awareness",
    "Motivation Boost"
  ],
  Productivity: [
    "Time Management",
    "Improving Focus",
    "Goal Setting",
    "Beating Procrastination",
    "Habit Building"
  ],
  "Social & Relationships": [
    "Communication Skills",
    "Healthy Relationships",
    "Handling Rejection",
    "Social Anxiety",
    "Conflict Resolution"
  ],
  "Mind & Control": [
    "Overthinking Control",
    "Mindfulness Basics",
    "Inner Peace",
    "Letting Go",
    "Emotional Intelligence"
  ]
};

let id = 1;

const tutorials = Object.entries(categories).flatMap(([category, titles]) =>
  titles.map((title) => ({
    id: id++,
    title,
    description: `Learn about ${title.toLowerCase()} and improve your life.`,
    progress: Math.floor(Math.random() * 100),
    category,
    video: "https://www.youtube.com/watch?v=ZToicYcHIOU",
    article: baseArticle,
    quiz: baseQuiz,
    resources: baseResource
  }))
);

export default tutorials;