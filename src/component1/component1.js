// Example to use component 
export class MyClass {
    constructor(credentials) {
        this.firstName = credentials.firstName;
        this.lastName = credentials.lastName
    }
    getName() {
        return this.firstName + this.lastName;
    }
}

