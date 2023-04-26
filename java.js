// Array.prototype.myEach = function(callback) { 
//   for (let i = 0; i < this.length; i++) { 
//     callback(this[i]);
//   };
//  };

//  const arr = [1,2,3];
//  console.log(Array.prototype.myEach(arr));

class Clock { 


  constructor() {
      // const now = new Date(1980, 6, 31); 
      const now = new Date();
      this.hours = now.getHours()
      this.minutes = now.getMinutes()
      this.seconds = now.getSeconds()
      setInterval(() => {

        this._tick(); 
      }, 500);
  };

  printTime() {
    // const now = new Date();
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
  };

  _tick() {
      setInterval(() => {
        this.seconds ++
        if (this.seconds === 60) {
            this.minutes ++
            this.seconds = 0 
                if (this.minutes === 60)  {
                       this.hours ++ 
                       this.minutes = 0 
                };
        };
        this.printTime();
      }, 1000);
    };

  };

const clock = new Clock();



