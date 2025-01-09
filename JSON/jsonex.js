// Exercises:  Use the objects to complete the exercise below.

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
// Exercises Level 1:
// Change skills array to JSON using JSON.stringify()
// Stringify the age variable
// Stringify the isMarried variable
// Stringify the student object


const skillsJson = JSON.stringify(skills);
const ageJson = JSON.stringify(age);
const isMarriedJson = JSON.stringify(isMarried);
const studentJson = JSON.stringify(student);
console.log(skillsJson);
console.log(ageJson);
console.log(isMarriedJson);
console.log(studentJson);



// Exercises Level 2:
// Stringify the students object with only firstName, lastName and skills properties

const studentsJson = JSON.stringify(txt, ['firstName', 'lastName','skills']);
console.log(studentsJson);

// Exercises Level 3
// Parse the txt JSON to object.
// Find the user who has many skills from the variable stored in txt.

const jsonObj = JSON.parse(txt);
let maxSkillsUser = '';
let maxSkillsCount = 0;

for (let user in jsonObj) {
    if (jsonObj[user].skills.length > maxSkillsCount) {
        maxSkillsCount = jsonObj[user].skills.length;
        maxSkillsUser = user;
    }
}
console.log(`The user with the most skills is ${maxSkillsUser} with ${maxSkillsCount} skills.`);
// End of Exercises.




// 🎉 CONGRATULATIONS ! 🎉