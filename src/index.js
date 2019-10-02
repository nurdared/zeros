module.exports = function zeros(expression) {
  let countFive = 0;                                                        //Counter for five
  let countTwo = 0;                                                         //Counter for two
  let factorials = expression.split('*');                                   //Putting Each Number in to an Array
  for(let factorial of factorials) {                                        
    let number = parseInt(factorial);                                       //Parsing string with '!' to number
    if (factorial[factorial.length - 2] !== '!'){                           //Check is it double '!!' or not
      for(let i = 5; i <= number; i = i * 5)
        countFive = countFive + Math.floor(number / i);                     //Count fives' for '!'
      for(let i = 2; i <= number; i = i * 2)
        countTwo = countTwo + Math.floor(number / i);                       //Count twos' for '!'
    }
    else {
      if(number % 2 === 0) {
        for(let i = 5; i <=number; i = i * 5)
          countFive = countFive + Math.floor(Math.floor(number / i) / 2);   //Count fives of even '!!' numbers
        for(let i = 2; i <= number; i = i * 2)
          countTwo = countTwo + Math.floor(number / i);                     //Count twos of even '!!' numbers
      }
      else {
        for(let i = 5; i <=number; i = i * 5)
          countFive = countFive + Math.ceil(Math.floor(number / i) / 2);    //Count fives of odd '!!' numbers
      }
    }
  }
  return Math.min(countFive, countTwo);                                      //Comparing fives and twos and taking minumum
}