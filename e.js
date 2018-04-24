const person = { name: 'Teo', age: 10, height: 100 };
const { name, age, height } = person;
// const name = person.name;
// const age = person.age;
// const height = person.height;
console.log(name, age, height);

// const arr = [1, 3, 5, 10, 11, 12];

// const [a1, a2, a3, ...rest] = arr;

// console.log(a1, a2, a3, rest);
function showAge({ age }) {
    console.log(age);
}

showAge({ age: 10 });
