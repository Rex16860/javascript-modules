export default class {
    constructor (name) {
        this.name = name;
    }

    greetings() {
        console.info(`hi, my name is ${this.name}`)
    }
}