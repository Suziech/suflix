function Person(name, gender) {
    let married = true;
    this.name = name;
    this.gender = gender;
    this.sayHello = function () {
        console.log('hi my name is ' + this.name);
    }
}

let person = new Person('Lee', 'male');

console.log(typeof person);
console.log(person);

console.log(person.gender);
console.log(person.married);