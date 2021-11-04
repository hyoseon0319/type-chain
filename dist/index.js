"use strict";
// interface Human {
//     name: string,
//     age: number,
//     gender: string
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Lynn", 18, "female");
const person = {
    name: "hhs",
    age: 26,
    gender: "female"
};
const sayHi = (person) => {
    return `Hello, ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(person));
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map