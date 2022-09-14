export default class Display {
    publisher = undefined;
    total = 0;
  
    constructor(name) {
      this.name = name;
    }
  
    subscribeTo(publisher) {
      this.publisher = publisher;
      publisher.registerSubscriber(this);
    }
  
    alert() {
      this.total += this.publisher.getNumber();
    }
  
    display() {
      console.log(`[${this.name}] Total is ${this.total}`);
    }
  }