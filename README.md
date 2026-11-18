# Student Records Explorer

A beginner JavaScript project that stores student records as an array of objects and works with them: reading nested data safely, handling missing values, formatting reports, looping through records, searching for a student and filtering groups of students.

> **Learning track:** Phase 1 (Absolute Beginner), JavaScript Data Handling Fundamentals
> **Status:** 🚧 In progress. Lesson 6 (`.filter()`) is done. `.map()` is next.

---

## What the project does

The program keeps a small set of student records. Some students have guardian details and some don't:

```js
const pupils = [
  { name: "Ama",   age: 17, guardian: { name: "Mrs. Mensah", phone: "0241234567" } },
  { name: "Kofi",  age: 18 },                       // no guardian on record
  { name: "Abena", age: 16, guardian: { name: "Mr. Owusu",  phone: "0209876543" } },
];
```

Using this data, the program:

- reads nested guardian information without crashing when it is missing
- shows a default message when a value doesn't exist
- prints a formatted report line for each student
- searches for a student by name and handles the case where no match is found
- filters students by age and shows a helpful message when nobody matches

---

## Concepts covered

| # | Challenge | Concept | What it does |
|---|-----------|---------|--------------|
| 1 | Accessing nested data | Optional chaining (`?.`) | Reads `guardian.name` safely and returns `undefined` instead of throwing an error |
| 2 | Handling missing information | Nullish coalescing (`??`) | Uses a fallback such as `"Not provided"` when a value is `null` or `undefined` |
| 3 | Displaying student information | Template literals (`` `${}` ``) | Builds readable strings from variables |
| 3B | Building a student report | `?.` + `??` + template literals | Prints a one-line report for a single student |
| 4 | Displaying multiple students | `for...of` loop | Goes through every item in an array |
| 4B | Generating reports automatically | `for...of` + template literals | Prints a report for every student |
| 5B | Student search feature | `Array.prototype.find()` | Returns the first student that matches a condition |
| 5C | Handling missing records | `.find()` + `if...else` | Shows a "not found" message when the search returns `undefined` |
| 6A | Filtering student records | `Array.prototype.filter()` | Returns a new array of every student aged 18 or older |
| 6B | Displaying filtered records | `.filter()` + `for...of` | Prints each matching student in a readable format |
| 6C | Handling empty filter results | `.filter()` + `.length` check | Shows "No eligible student found" when the filtered array is empty |

### Key snippets

**Safe access with a fallback value**
```js
pupils[1].guardian?.name ?? "Guardian information not available";
// → "Guardian information not available"
```

**Automatic report generation**
```js
for (const pupil of pupils) {
  console.log(
    `Student: ${pupil?.name} | Age: ${pupil?.age} | Guardian: ${pupil.guardian?.name ?? "Not provided"}`
  );
}
```

**Searching and handling a missing record**
```js
const searchName = "Yaw";
const locatedPupil = pupils.find((pupil) => pupil.name === searchName);

if (locatedPupil) {
  console.log(`Student Found: ${locatedPupil.name} | Age: ${locatedPupil.age}`);
} else {
  console.log(`Student ${searchName} was not found`);
}
```

**Filtering and handling an empty result**
```js
const minimumAge = 25;
const eligibleStudents = studs.filter((stud) => stud.age >= minimumAge);

if (eligibleStudents.length === 0) {
  console.log("No eligible student found");
} else {
  for (const stud of eligibleStudents) {
    console.log(`Student: ${stud.name} | Age: ${stud.age}`);
  }
}
```

---

## Getting started

### Prerequisites
- [Node.js](https://nodejs.org/) version 14 or newer (needed for `?.` and `??`)

### Run it
```bash
git clone <your-repo-url>
cd "JavaScript Data Handling Fundamentals"
node student-records.js
```

### Expected output
```text
undefined
Mrs. Mensah
Guardian information not available
The MacBook Pro costs GHS 18000
Student: Kofi | Age: 18 | Guardian: Not provided
Dell
HP
Lenovo
Student: Ama | Age: 17 | Guardian: Mrs. Mensah
Student: Kofi | Age: 18 | Guardian: Not provided
Student: Abena | Age: 16 | Guardian: Mr. Owusu
Student Found: Abena | Age: 16
Student Yaw was not found
[
  { name: 'Kofi', age: 18 },
  { name: 'Yaw', age: 20 },
  { name: 'Akosua', age: 19 }
]
Student: Kofi | Age: 18
Student: Yaw | Age: 20
Student: Akosua | Age: 19
[
  { name: 'Kofi', age: 18 },
  { name: 'Yaw', age: 20 },
  { name: 'Akosua', age: 19 }
]
Filtering completed
Program finished
No eligible student found
```

---

## Project structure

```text
JavaScript Data Handling Fundamentals/
├── student-records.js   # All challenges, in order (1 → 6C)
└── README.md
```

---

## Roadmap

- [x] Optional chaining (`?.`)
- [x] Nullish coalescing (`??`)
- [x] Template literals
- [x] `for...of` loops
- [x] Searching with `.find()`
- [x] Handling missing search results
- [x] Selecting groups of students with `.filter()` (Lesson 6)
- [x] Handling empty filter results with `.length`
- [ ] Transforming data with `.map()`
- [ ] Summarising data with `.reduce()`

---

## What I learned

- Real-world data is often incomplete, so code should expect missing fields and not crash.
- `?.` stops property access early when a value is `null` or `undefined`.
- `??` is safer than `||` for defaults because it keeps valid falsy values such as `0` and `""`.
- `.find()` returns `undefined` when nothing matches, so the result must be checked before it is used.
- `.filter()` always returns a new array, even an empty one, so check `.length` to handle the no-match case.
- A `for...of` loop over an empty array simply doesn't run, so without a check the user gets no feedback at all.

---

## Author

**Bless Kojo Dandzo**. Self-study as part of a full-stack software engineering learning path.

*The student names and phone numbers in this project are made up for practice.*
