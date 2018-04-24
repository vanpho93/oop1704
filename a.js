const person = {
    name: 'Teo',
    age: 10,
    school: { name: 'Khoa Pham', address: '92 LTR' },
    sayHello: function() {
        console.log('Hello, I am ' + this.name);
    }
};
person.sayHello();
// console.log(person.name);
// console.log(person.height);
// person.age = 11;

// console.log(person.school.name);
