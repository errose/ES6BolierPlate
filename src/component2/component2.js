export class MyClass {
    constructor(credentials) {
        this.name = credentials.name;
        this.enrollmentNo = credentials.enrollmentNo
    }
    getName() {
        return this.name;
    }
}
var cred={
    name:'Rr',
    enrollmentNo:11115078
}
let a = new MyClass(cred);

export class Foo {
	sayHi(){
		console.log("Hello");
	}
}

const hello = {
	hi: 'there'
}

console.log(a.getName());