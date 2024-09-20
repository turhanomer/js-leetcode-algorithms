class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback);

    return {
      unsubscribe: () => {
        this.events[event] = this.events[event].filter((cb) => cb !== callback);

        if (this.events[event].length === 0) {
          delete this.events[event];
        }
      },
    };
  }

  emit(event, args = []) {
    if (!this.events[event]) {
      return [];
    }
    return this.events[event].map((callback) => callback(...args));
  }
}

const emitter = new EventEmitter();

const sub1 = emitter.subscribe("firstEvent", () => 5);
const sub2 = emitter.subscribe("firstEvent", () => 6);

console.log(emitter.emit("firstEvent")); // Output: [5,6]

sub1.unsubscribe();

console.log(emitter.emit("firstEvent")); // Output: [6]

const sub3 = emitter.subscribe("firstEvent", (a, b) => a + b);
console.log(emitter.emit("firstEvent", [2, 3])); // Output: [6,5]

sub2.unsubscribe();
sub3.unsubscribe();
console.log(emitter.emit("firstEvent")); // Output: []
