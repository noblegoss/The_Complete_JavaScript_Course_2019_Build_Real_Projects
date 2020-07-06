/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
// question1:
let johnMass = 78;
let johnHeight = 1.82;
let markMass = 90;
let markHeight = 1.65;

// question2:
let johnBmi = johnMass / johnHeight **2;
console.log(`John BMI is ${johnBmi}`);
let markBmi = markMass / markHeight **2;
console.log(`Mark BMI is ${markBmi}`);

// qquestion3:
let markBiggerThanJohn = markBmi > johnBmi;
console.log(`Is Mark's BMI higher than John's? : ${markBiggerThanJohn}.`);
