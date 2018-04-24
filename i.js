const people = [
    { name: 'Teo', age: 10, height: 120 },
    { name: 'Ti', age: 15, height: 180 },
    { name: 'Tun', age: 13, height: 200 },
];

console.log(people.every(person => person.age > 10));
console.log(people.some(person => person.age > 100));
