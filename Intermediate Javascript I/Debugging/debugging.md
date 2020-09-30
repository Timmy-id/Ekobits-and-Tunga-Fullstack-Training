## Debugging Exercises

  ###Part I

1. `throw` keyword allows for creating a defined error.
2. `finally` keyword allows a code to run whether it consists of errors or not.
3. `TypeError` occurs due to the incorrect use of certain types while `ReferenceError` occurs when trying to access a non-exixtent variable.
4. To create a snippet in the chrome developer tools, 
  - Open the chrome dev tools using `Ctrl + shift + j`
  - Select the sources tab
  - Click on the New Snippet button and enter a name, then save
5. An exception is an error that occurs in your code.
6.
```
    function() {
      let name = "Timmy";
      try {
          if (name == "Ellie") {
            console.log("incorrect name);
            }
        } catch(e) {
              console.log("Error: " + e);
            }
       }
 ```
       
### Types of errors
1. `person;` => `ReferenceError`

2. 
```
    let data = {};
    data.displayInfo();
```
    will give `TypeError`
    
3. 
```
    let data = {};
    data.displayInfo.foo = "bar";
 ```
   will give `TypeError`
   
4. 
```
    function data(){
    let thing = "foo";
    }
    data();
    thing;
```
   will give `SyntaxError`
   
### Part II

1. 
  - Incorrect
```
for(let i=0; i > 5; i++){
    console.log(i);
}
```
  - Correct
```
function loopToZero(){
    for(let i=5; i > 0; i--){
        console.log(i);
    }
}
```
  
2. 
- Incorrect
```
    function addIfEven(num){
      if(num % 2 = 0){
          return num + 5;
      }
      return num;
    }
```
- Correct
```
    function addIfEven(num){
      if(num % 2 == 0){
          return num + 5;
      }
      return num;
    }
 ```

The assignment operator was used in the if statement instead of equal operator.

3.
```
  function loopToFive(){
    for(let i=0, i < 5, i++){
        console.log(i);
    }
}
```

Syntax error - comma was used instead of semicolon

```
  function loopToFive(){
    for(let i=0; i < 5; i++){
        console.log(i);
    }
}
```
4. 
  - Incorrect
```
function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
```
  - Correct
```
function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let num of numbers){
        if(num % 2 == 0) {
            evenNumbers.push(num)
        }
    }
    return evenNumbers;
}
```
