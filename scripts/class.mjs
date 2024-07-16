export class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    sayHello(name) {
        console.info(`Hello ${name}, my name is ${this.name}`)
    }
}