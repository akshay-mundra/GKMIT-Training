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