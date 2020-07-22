/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

// question1:

let john = {
    bills : [124, 48, 268, 180, 42],
    totalPaid : [],
    tips: [],
};

// question2 and 3:
let percent = [0.2, 0.15, 0.1];
john.tipsCal = function(){
    for(let i = 0;i < this.bills.length; i++){
        if(this.bills[i] < 50){
            this.tips.push(this.bills[i] * percent[0])
            this.totalPaid.push(this.bills[i] + this.tips[i])
        } else if(this.bills[i] >= 50 && this.bills[i] < 200){
            this.tips.push(this.bills[i] * percent[1])
            this.totalPaid.push(this.bills[i] + this.tips[i])
        }else{
            this.tips.push(this.bills[i] * percent[2])
            this.totalPaid.push(this.bills[i] + this.tips[i])
        }   
    }
    return '['+ this.tips + ']'+ ' ' + '['+ this.totalPaid+']'; // [18.599999999999998,9.600000000000001,26.8,27,8.4] [142.6,57.6,294.8,207,50.4]
    }

// question4:
console.log(john.tipsCal());   

//  for(let i in john){
//     console.log(i +": "+ john[i]);
// }      


// question5:
let mark = {
    bills : [77, 375, 110, 45],
    totalPaid : [],
    tips: [],
};

percent = [0.2, 0.1, 0.25];
mark.tipsCal = function(){
    for(let i = 0;i < this.bills.length; i++){
        if(this.bills[i] < 100){

            this.tips.push(this.bills[i] * percent[0])
            this.totalPaid.push(this.bills[i] + this.tips[i])

        } else if(this.bills[i] >= 10 && this.bills[i] < 300){
            this.tips.push(this.bills[i] * percent[1])
            this.totalPaid.push(this.bills[i] + this.tips[i])
        }else{
            this.tips.push(this.bills[i] * percent[2])
            this.totalPaid.push(this.bills[i] + this.tips[i])
        }   
    }
    return '['+ this.tips + ']'+ ' ' + '['+ this.totalPaid+']'; // [15.4,93.75,11,9] [92.4,468.75,121,54]
    }

console.log(mark.tipsCal()); 

// question6: 
const averageTips = (arr) => {
    var sum = arr.reduce(function(a, b){ // sum all elements in arr
        return a + b;
    }, 0); // it's a good practice to add 0 for addition or 1 for mult - as initialValue
    sum = sum / arr.length
    return sum;
};
// question6: 
console.log(averageTips(mark.tips)); //32.2875
console.log(averageTips(john.tips)); //18.080000000000002

// question7:
//const highAverageTip = Math.max(averageTips(mark.tips),averageTips(mark.tips)); 
if(averageTips(mark.tips) > averageTips(john.tips)){
    console.log(`Mark's family has the highest average tips: ${averageTips(mark.tips)}`); 
}else if(averageTips(mark.tips) < averageTips(john.tips)){
    console.log(`John's family has the highest average tips: ${averageTips(john.tips)}`); 
} else{
    console.log(`Both families have the same average tips: ${averageTips(john.tips)}`); 
}