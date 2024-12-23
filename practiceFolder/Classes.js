class Developer {
    constructor(name, age, skills) {
        this.name = name;
        this.age = age;
        this.skills = skills;
    }
}

developer1=new Developer();

console.log(developer1);

developer1.name="John Doe";

console.log(developer1);

developer1.age=30;

console.log(developer1);

developer1.skills=["JavaScript", "React", "Node.js"];

console.log(developer1);
