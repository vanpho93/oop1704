function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log('Hello, I am ' + this.name);
    }
}

const teo = new Person('Teo', 11);
const ti = new Person('Ti', 12);
const tun = new Person('Tun', 13);

teo.sayHello();
ti.sayHello();
tun.sayHello();

console.log(teo, ti, tun);
