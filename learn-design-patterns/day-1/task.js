// Design Principles


// 1. Singleton pattern


// bad code 
class BadSingleton {
	static getInstance(){
		return new BadSingleton()
	}
}
const s1 = BadSingleton.getInstance();
const s2 = BadSingleton.getInstance();
console.log(s1 === s2); // false


// good code
class Singleton {
	static getInstance(){
		if(!this.instance){
			this.instance = new Singleton()
		}
		return this.instance
	}
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1 === s2); // true



// 2. Factory method pattern


// BAD CODE
class Add {
    constructor(a, b){
        this.addition = a+b;
    }
    add(){
        console.log(this.addition);
    }
}

class Sub {
    constructor(a, b){
        this.subtraction = a-b;
    }
    sub(){
        console.log(this.subtraction);
    }
}

const ans = new Add(24, 13);
ans.add();
const result = new Sub(24,13);
result.sub();


// GOOD CODE


class Add {
    constructor(a, b){
        this.addition = a+b;
    }
    getAns(){
        console.log(this.addition);
    }
}


class Sub {
    constructor(a, b){
        this.subtraction = a-b;
    }
    getAns(){
        console.log(this.subtraction);
    }
}


class MathFactory {
    static math(operation, a, b){
        switch (operation){
            case 'Add':
				return new Add(a,b);
            case 'Sub':
				return new Sub(a,b);
            break;
        }
    }
}
const add1 = MathFactory.math("Add", 24, 13);
add1.getAns();
const sub1 = MathFactory.math("Sub", 24, 13);
sub1.getAns();



// 3. Observer Pattern 


// GOOD CODE


class Observable {

  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data) {
    this.observers.forEach((observer) =>{
            console.log(observer(data));
            return observer(data)
    });
  }
}

const obj = new Observable();

let fun = (data)=>{
    return `subscriber 1 ${data}`;
}

obj.subscribe(fun);

obj.notify("hey there!!");


/5. Logging Proxy

// Good example

const targetObject = {
  name: "John",
  age: 30,
  greet: function() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

const loggingProxy = new Proxy(targetObject, {
  get(target, prop, receiver) {
    console.log(`Accessing property: ${prop}`);
    return Reflect.get(target, prop, receiver);
  },

  set(target, prop, value, receiver) {
    console.log(`Setting property: ${prop} to ${value}`);
    return Reflect.set(target, prop, value, receiver);
  }
});

loggingProxy.name = "Jane"; // Logs: Setting property: name to Jane
loggingProxy.greet(); // Logs: Accessing property: greet, Hello, I'm Jane



// Bad example: Overcomplicated Proxy

const target = {};

const proxy = new Proxy(target, {
  get(target, prop) {
    if (prop === 'foo') {
      // Complex logic here...
    } else if (prop === 'bar') {
      // More complex logic...
    }
    // ...
  },
  set(target, prop, value) {
    if (prop === 'foo') {
      // Even more complex logic...
    }
    // ...
  }
});



// 6. Command Pattern

// Good example

class Light {
  constructor() {
    this.isOn = false;
  }

  on() {
    this.isOn = true;
    console.log('Light is on');
  }

  off() {
    this.isOn = false;
    console.log('Light is off');
  }
}

class LightOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.on();
  }
}

class LightOffCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.off();
  }
}

const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remoteControl = {
  executeCommand: function(command) {
    command.execute();
  }
};

remoteControl.executeCommand(lightOnCommand);
remoteControl.executeCommand(lightOffCommand);



// Bad example

function turnLightOn() {
  console.log('Light is on');
}

function turnLightOff() {
  console.log('Light is off');
}

const remoteControl = {
  on: turnLightOn,
  off: turnLightOff
};

remoteControl.on();
remoteControl.off();




//  SOLID 

// 1. Single Responsibility Principle

// Bad code
class UserManager {

  constructor(authService, db) {
    this.authService = authService;
    this.db = db;
  }

  authenticate(username, password) {
  	// logic here
  }

  save(user){
  	// save user to db
  }

}

// good code 
class AuthenticationService {
  authenticate(username, password) {
    // Authentication logic
  }
}

class UserRepo {
  save(data) {
  	// save user to db 
  }
}

// 2. Open/Closed Principle

// bad code 

class ManageSalaries {

  constructor() {
    this.salaryRates = [
      { id: 1, role: 'developer', rate: 100 },
      { id: 2, role: 'architect', rate: 200 },
      { id: 3, role: 'manager', rate: 300 },
    ];
  }

  calculateSalaries(empId, hoursWorked) {

    let salaryObject = this.salaryRates.find((o) => o.id === empId);
    return hoursWorked * salaryObject.rate;
  }
}

const mgtSalary = new ManageSalaries();

console.log("Salary : ", mgtSalary.calculateSalaries(1, 100));


// Good code 

class ManageSalaries {

  constructor() {
    this.salaryRates = [
      { id: 1, role: 'developer', rate: 100 },
      { id: 2, role: 'architect', rate: 200 },
      { id: 3, role: 'manager', rate: 300 },
    ];
  }

  calculateSalaries(empId, hoursWorked) {
    let salaryObject = this.salaryRates.find((o) => o.id === empId);
    return hoursWorked * salaryObject.rate;
  }

  addSalaryRate(id, role, rate) {
    this.salaryRates.push({ id: id, role: role, rate: rate });
  }
}

const mgtSalary = new ManageSalaries();
mgtSalary.addSalaryRate(4, 'developer', 250);
console.log('Salary : ', mgtSalary.calculateSalaries(4, 100));






// 3. Liskov’s Substitution Principle


// bad code 

interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(size) {
    // The Square class incorrectly uses the Rectangle constructor
    super(size, size);
  }
  // Violates LSP by changing the behavior of `setWidth` and `setHeight` methods
  setWidth(width) {
    this.width = width;
    this.height = width; // Forces the height to be the same as width
  }
  setHeight(height) {
    this.width = height; // Forces the width to be the same as height
    this.height = height;
  }
}

function drawShape(shape) {
  const area = shape.calculateArea();
  // Draw the shape based on its area
}

const mySquare = new Square(5);

mySquare.setWidth(4); // Unexpectedly alters both width and height

drawShape(mySquare); // Now this function is confused, as the behavior of the square changes unpredictably




// 4. Interface Segregation Principle


// bad code 

class DrivingTest {
  constructor(userType) {
    this.userType = userType;
  }
  startCarTest() {
    console.log(“This is for Car Drivers”’);
  }
  startTruckTest() {
    console.log(“This is for Truck Drivers”);
  }
}
class CarDrivingTest extends DrivingTest {
  constructor(userType) {
    super(userType);
  }
  startCarTest() {
    return “Car Test Started”;
  }
  startTruckTest() {
    return null;
  }
}
class TruckDrivingTest extends DrivingTest {
  constructor(userType) {
    super(userType);
  }
  startCarTest() {
    return null;
  }
  startTruckTest() {
    return “Truck Test Started”;
  }
}

const carTest = new CarDrivingTest(carDriver );
console.log(carTest.startCarTest());
console.log(carTest.startTruckTest());

const truckTest = new TruckDrivingTest( ruckdriver );
console.log(truckTest.startCarTest());
console.log(truckTest.startTruckTest());


// good code 
class DrivingTest {
  constructor(userType) {
    this.userType = userType;
  }
}
class CarDrivingTest extends DrivingTest {
  constructor(userType) {
    super(userType);
  }
}
class TruckDrivingTest extends DrivingTest {
  constructor(userType) {
    super(userType);
  }
}
const carUserTests = {
  startCarTest() {
    return ‘Car Test Started’;
  },
};
const truckUserTests = {
  startTruckTest() {
    return ‘Truck Test Started’;
  },
};
Object.assign(CarDrivingTest.prototype, carUserTests);
Object.assign(TruckDrivingTest.prototype, truckUserTests);
const carTest = new CarDrivingTest(carDriver );
console.log(carTest.startCarTest());
console.log(carTest.startTruckTest()); // Will throw an exception
const truckTest = new TruckDrivingTest( ruckdriver );
console.log(truckTest.startTruckTest());
console.log(truckTest.startCarTest()); // Will throw an exception









// 5. Dependency Inversion Principle


// bad code
class EmailController {
  sendEmail(emailDetails) {
    if (response.status == 200) {
       return true;
    } else {
       return false;
    }
  }
}

// good code
class EmailController {
  sendEmail(emailDetails) {
    const response = EmailApiController.sendEmail(emailDetails);
    if (response.status == 200) {
       return true;
    } else {
       return false;
    }
  }
}












































