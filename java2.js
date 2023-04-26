const readline = require('readline');

let rl = readline.createInterface(
  process.stdin, process.stdout);

function addNums(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {

        let prompt = rl.question("Provide us with a number:", (answer) => {
            let input = parseInt(answer); 
            sum += input 
            console.log(sum); 
            numsLeft -- 
            addNums(sum, numsLeft, completionCallback);
        });
      };

      if (numsLeft === 0) {
        completionCallback(sum);
      };
};


addNums(0, 3, sum => console.log(`Total Sum: ${sum}`));

    //     rl.question('What is your age? ', (age) => {
    //         console.log('Your age is: ' + age);
    //         rl.close();
    //     });

       
    //       let input = parseInt(answer);
    //       console.log(input);

       
    //       // console.log(prompt);
          
    //       // sum + input 
    //       // rl.close(); 
    // };
    //   // addNums(sum, numsLeft, completionCallback)
    //   numsLeft--
    //       if (numsLeft === 0) {
    //           let totalSum = completionCallback(sum)
    //       };
