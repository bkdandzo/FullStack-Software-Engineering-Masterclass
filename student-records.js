/*
  Phase: 1 - Absolute Beginner
  Module: JavaScript Data Handling Fundamentals
  Topic: JavaScript Array Methods
 */

const students = [
  {
    name: "Ama",
    age: 17,
    guardian: {
      name: "Mrs. Mensah",
      phone: "0241234567",
    },
  },
  {
    name: "Kofi",
    age: 18,
  },
  {
    name: "Abena",
    age: 16,
    guardian: {
      name: "Mr. Owusu",
      phone: "0209876543",
    },
  },
];

console.log(students[1]?.guardian);

const kids = [
  {
    name: "Ama",
    guardian: {
      name: "Mrs. Mensah",
    },
  },
  {
    name: "Kofi",
  },
];
console.log(kids[0].guardian?.name);

// Challenge 2 — Handling Missing Information
// Nullish Coalescing Operator (??)
// Active Testing: Challenge 2
const pupils = [
  {
    name: "Ama",
    age: 17,
    guardian: {
      name: "Mrs. Mensah",
      phone: "0241234567",
    },
  },
  {
    name: "Kofi",
    age: 18,
  },
  {
    name: "Abena",
    age: 16,
    guardian: {
      name: "Mr. Owusu",
      phone: "0209876543",
    },
  },
];
console.log(pupils[1].guardian?.name ?? "Guardian information not available");

// Challenge 3 — Displaying Student Information
// Learn how to combine text and JavaScript values using template literals.
const product = {
  name: "MacBook Pro",
  price: 18000,
};
console.log(`The ${product.name} costs GHS ${product.price}`);

// Challenge 3B — Building a Student Report
const pupil = pupils[1];

console.log(
  `Student: ${pupil?.name} | Age: ${pupil?.age} | Guardian: ${pupil.guardian?.name ?? "Not provided"}`,
);

// Challenge 4 — Displaying Multiple Students
// New Concept: The for...of Loop
const laptops = ["Dell", "HP", "Lenovo"];

for (const laptop of laptops) {
  console.log(laptop);
}

// Challenge 4B — Generating Student Reports Automatically
for (const pupil of pupils) {
  console.log(
    `Student: ${pupil?.name} | Age: ${pupil?.age} | Guardian: ${pupil.guardian?.name ?? "Not provided"}`,
  );
}

/*
 Project: 01 - Student Records Explorer
 Challenge: 5B - Building a Student Search Feature
 
 Objective:
 Find a specific student in an array using .find()
 and display the student's information.
*/
const foundStudent = pupils.find((pupil) => {
  return pupil.name === "Abena";
});
console.log(`Student Found: ${foundStudent.name} | Age: ${foundStudent.age}`);

/* 
  Project: 01 - Student Records Explorer
  Challenge: 5C - Handling Missing Student Records
  Topic: Array .find() and Conditional Statements
 
  Objective:
  Safely handle a student search when no matching student exists in the database.
  Search for a student and safely handle cases where the student does not exist.
*/
const searchName = "Yaw";

const locatedPupil = pupils.find((pupil) => {
  return pupil.name === searchName;
});
if (locatedPupil) {
  console.log(
    `Student Found: ${locatedPupil.name} | Age: ${locatedPupil.age} `,
  );
} else {
  console.log(`Student ${searchName} was not found`);
}

// Lesson 6 — Introduction to .filter()
// JavaScript's .filter() method helps you select all array elements that satisfy a condition.
