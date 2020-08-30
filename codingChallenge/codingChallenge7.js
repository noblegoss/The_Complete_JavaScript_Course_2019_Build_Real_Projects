// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

//7 
(function(){
    //1
function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}


//4
Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for(let i = 0; i < this.answers.length; i++){
        console.log(i + ' : '+ this.answers[i])
    }
}
//5

Question.prototype.checkAnswer = function(ans){
    if(ans === this.correct){
        console.log('correct answer!')
    } else{
        console.log('wrong answer! Try again')
    }
}
//2
var q1 = new Question('Is Cameroon a rich country?',
['yes', 'no'], 0);

var q2 = new Question("what's the Cameroon president's name?",
['John Do', 'Michael Jordan', 'Paul Biya'], 2);

var q3 = new Question('The highest volcano in central Africa?',
['Kilimanjaro', 'Mount Cameroon', 'Hiroshima', 'Hawai'], 1);

//3
var questions = [q1, q2, q3];

//4
var numb = Math.floor(Math.random()*questions.length);

questions[numb].displayQuestion() // fait apparaitre la question et la reponse a chosir

//5
var answer = parseInt(prompt('please select the correct answer.'));

//6
questions[numb].checkAnswer(answer) // verifie si la reponse est vrai
})();
