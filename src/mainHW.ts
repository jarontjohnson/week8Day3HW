// 1. Given the data below, define a type alias for representing users.

let users = [  
    {
        name: 'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

type User = {
    name: string,
    age: number,
    company?: string
}

type User2 = {
    name: string,
    age: number
}
type Users = {
    name: string,
    age: number,
}


// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}
}

let person = new Person('Jaron', 'Johnson');

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 

class Employee extends Person {
    constructor(
        public firstName:string, 
        public lastName:string, 
        public salary:number) {
        super(firstName, lastName);
    }get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get yearlySalary(): number {
        return this.salary * 12;
    }
}

const worker = new Employee('Jaron', 'Johnson', 1_000_000);
console.log(worker.fullName);
console.log(worker.yearlySalary());



// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

interface Employee {
    name: string,
    salary: number,
    address: {
        street: string,
        city: string,
        zipCode: number
    }
    printInfo(): string => `${this.name} has a salary of ${this.salary} and lives at ${this.address}.`
}

const Thieves = new Employee('Christian Askew', 1_000_000, {street:'Thieves st', city:'Seattle', zipCode: 98101});
console.log(Thieves.printInfo());