import Interface from './Interface.js';

const ISubscriber = new Interface('Subscriber', ['alert']);

export default class NumberPublisher {

  subscribers = [];
  halt = false;

  constructor(name) {
    this.name = name;
  }

  registerSubscriber(newSubscriber) {
    ISubscriber.implementedBy(newSubscriber);
    this.subscribers.push(newSubscriber);
  }

  deregisterSubscriber(oldSubscriber) {
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== oldSubscriber);
  }

  run = () => {
    const number = this.generateNumber(0,100);
    const interval = this.generateNumber(200, 1300);
    this.deliverToSubscribers(number);
    if (!this.halt) {
      setTimeout(() => this.run(), interval);
    }
  }

  stop = () => this.halt = true;
  
  generateNumber = (start,range) => Math.round(start + range*Math.random());

  deliverToSubscribers = (number) => this.subscribers.forEach(subscriber => subscriber.alert(number));
}