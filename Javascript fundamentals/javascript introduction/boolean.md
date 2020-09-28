## Boolean Logic Exercises
### Part I

1. `2 == "2";` will return true.
2. `2 === 2;` will return true.
3. `10 % 3;` will return 1.
4. `10 % 3 === 1;` will return true.
5. `true && false;` will return false.
6. `false || true;` will return true.
7. `true || false;` will return true.

### Part II

```
let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}
```
1. The code above will return `Keet it up!`
2. `if(isLearning === true)` is needed because we are trying to specify a boolean logic.

```
let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

if(firstvariable){
    console.log("first");
} else if(firstvariable || secondvariable){
    console.log("second");
} else if(firstvariable || thirdvariable){
    console.log("third");
} else {
    console.log("fourth");
}
```

1. The code above will output `third` because `thirdvariable` is the first variable with a truthy value.
2. The value of `firstvariable` when it is initialized is `first`.
3. The value of `firstvariable` is not a truthy value because its value is `undefined` which is a falsey value.
4. The value of `secondvariable` is not a truthy value because its value is an empty string which is a falsey value.
5. The value of `thirdvariable` is a truthy value because its value translates to true.

### Part III

A falsey value is a value that is considered false when used in a boolean context. The falsey values in JavaScript are:
- `0`
- `""`
- `null`
- `undefined`
- `false`
- `NaN`
