// Your code here
class Employee {
    constructor ( name, occupation ){
        this.name = name;
        this.occupation = occupation;
    }
    sayName(){
        console.log(`${this.name} says hello.`)
    }
    sayOccupation () {
        console.log(`${this.name} is a ${this.occupation}.`)
    }
}
const john = new Employee(`John Wick`, `Dog Lo
lover`)

 setTimeout(john.sayName.bind(john), 2000);

setTimeout( john.sayOccupation.bind(john), 5000)




module.exports = Employee;
