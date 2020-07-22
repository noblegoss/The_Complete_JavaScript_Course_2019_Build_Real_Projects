/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality 
with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget 
they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// Question1: 

let john = {
    name : "john",
    lastName : "Malondo",
    mass : 85,
    height : 1.95,
}

let mark = {
    name : "Mark",
    lastName : "Ekoume",
    mass : 105,
    height : 1.95,
}
for(let i in john){
    document.write(i +": "+ john[i]+ "<br>")
}
document.write("<hr>")

for(let i in mark){
    document.write(i +": "+ mark[i]+ "<br>")
}
document.write("<hr>")

// Question2:

john.calculateBmi = function(){
    this.bmi = this.mass / (this.height**2);
    return this.bmi;
}

mark.calculateBmi = function(){
    this.bmi = this.mass / (this.height**2);
    return this.bmi;
}

//question3:

if(john.calculateBmi() > mark.calculateBmi()){
    document.write(john.name + " " + john.lastName+ " has the highest BMi: " +john.bmi +"<br><br>")
} else if(mark.calculateBmi() > john.calculateBmi()) {
    document.write(mark.name + " " + mark.lastName+ " has the highest BMi: " +mark.bmi +"<br><br>")
} else{
    document.write(john.name + " " + john.lastName+ " and "+ mark.name + " " + mark.lastName+" have the same BMi: " +john.calculateBmi()+"<br><br>")
}

for(let i in john){
    document.write(i +": "+ john[i]+ "<br>")
}
document.write("<hr>")

for(let j in mark){
    document.write(j +": "+ mark[j]+ "<br>")
}
document.write("<hr>")