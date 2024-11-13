class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        } else {
            return this.items.shift();
        }
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        } else {
            return this.items[0];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        return this.items;
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.printQueue()); 
console.log(queue.dequeue());    
console.log(queue.peek());       
console.log(queue.isEmpty());   
console.log(queue.dequeue());    
console.log(queue.isEmpty());   
console.log(queue.dequeue());   
