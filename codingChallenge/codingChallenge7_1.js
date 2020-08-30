
/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write 
    a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the 
user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to 
the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with 
the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

//7 
(function(){

    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }


    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for(let i = 0; i < this.answers.length; i++){
            console.log(i + ' : '+ this.answers[i])
        }
    }


    Question.prototype.checkAnswer = function(ans, fn){ // fn from question 10
        var sc;
        if(ans === this.correct){
            console.log('correct answer!')
            sc = fn(true)
        } else{
            console.log('wrong answer! Try again')
            sc = fn(false)
        }
        this.displayScore(sc);
    }
    //10
    Question.prototype.displayScore = function(score){
        console.log('your current score is: ' + score);
        console.log('-------------------------------------')
    }


    var q1 = new Question('Is Cameroon a rich country?',
    ['yes', 'no'], 0);

    var q2 = new Question("what's the Cameroon president's name?",
    ['John Do', 'Michael Jordan', 'Paul Biya'], 2);

    var q3 = new Question('The highest volcano in central Africa?',
    ['Kilimanjaro', 'Mount Cameroon', 'Hiroshima', 'Hawai'], 1);


    var questions = [q1, q2, q3];

    //10
    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    //8
    function nextQuestion(){

        var numb = Math.floor(Math.random()*questions.length);

        questions[numb].displayQuestion(); // fait apparaitre la question et la reponse a chosir

        var answer = prompt('please select the correct answer.');

        //9
        if (answer !== 'exit'){
        
            questions[numb].checkAnswer(parseInt(answer), keepScore); // verifie si la reponse est vrai

            nextQuestion();
        }
    }

    nextQuestion();

})();