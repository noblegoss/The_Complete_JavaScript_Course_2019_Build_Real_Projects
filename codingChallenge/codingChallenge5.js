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

let calculator = {
    bills : [124, 48, 268, 180, 42],
    tips : [],
};

// question2 and 3:

calculator.tipsCalculator = function(){
    let percent = [0.2, 0.15, 0.1];
    this.tip = 0;
    let bill = prompt("Choose your bill's value: 124, 48, 268, 180, 42 or stop to end: ");
    function oneTip(){
        for(let i = 0; i < this.bills.length; i++){ // we go through the list
            if (bill === this.bills[i]){ // User's input is compared to all value existing in the list to see if it matches or not.
                if(this.bills[i] < 50) {
                    this.tip = this.bills[i] * percent[0]
                    //this.tips.push(this.tip)
                } else if(this.bills[i] >= 50 && this.bills[i] <= 200){
                    this.tip = this.bills[i] * percent[1]
                   
                } else{
                    this.tip = this.bills[i] * percent[2]
                    
                } // tips =[ f(a)]
                return this.tip;
            } else {
               alert("Your value is not in our bill's list!")
               break
    
            }
        }
    
    }
    // let i = 0;
    // while(true){
    //     let b = prompt("Choose your bill's value: 124, 48, 268, 180, 42 or stop to end: ");
    //     bill = parseInt(b)
    //     if (bill === this.bills[i]){ // User's input is compared to all value existing in the list to see if it matches or not.
    //         if(this.bills[i] < 50) {
    //             this.tip = this.bills[i] * percent[0]
    //             //this.tips.push(this.tip)
    //             document.write(this.tip);
    //             //break
    //         } else if(this.bills[i] >= 50 && this.bills[i] <= 200){
    //             this.tip = this.bills[i] * percent[1]
    //             document.write(this.tip);
    //             //break
               
    //         } else{
    //             this.tip = this.bills[i] * percent[2]
    //             document.write(this.tip);
    //             //break
                
    //         } // tips =[ f(a)]
    //         //return this.tip;
    //     } else if( b === "stop"){
    //         break
    //     } else {
    //        alert("Your value is not in our bill's list!")
    //        //break
    //        //bill = +prompt("Choose your bill's value: 124, 48, 268, 180, 42 or stop to end: ")
    //     }
        
    // }

        
}
    
    




document.write(calculator.tipsCalculator() + "<br><hr>");



//document.write(tips+ "<br><hr>");

