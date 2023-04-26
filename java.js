// Array.prototype.myEach = function(callback) { 
//   for (let i = 0; i < this.length; i++) { 
//     callback(this[i]);
//   };
//  };

//  const arr = [1,2,3];
//  console.log(Array.prototype.myEach(arr));

class Clock { 


  constructor() {
      const now = new Date();
      this.hours = now.getHours()
      this.minutes = now.getMinutes()
      this.seconds = now.getSeconds()
      setInterval(() => this._tick(), 1000);
  };

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
  };

  _tick() {
        this.seconds ++
        if (this.seconds === 60) {
            this.minutes ++
            this.seconds = 0 
                if (this.minutes === 60) {
                       this.hours ++ 
                       this.minutes = 0 
                      if (this.hours === 24) {
                        this.hours = 0 
                      };
                };
        };
        this.printTime();
    };

  };

const clock = new Clock();



