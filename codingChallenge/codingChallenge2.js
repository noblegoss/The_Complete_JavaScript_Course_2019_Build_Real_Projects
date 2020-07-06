/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team

2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average
 score in the output.

3. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. 
HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)


GOOD LUCK 😀
*/

let johnTeamAverage, mikeTeamAverage, maryTeamAverage;
// question1:
johnTeamAverage = (89 + 120 + 103)/3;
mikeTeamAverage = (116 + 94 + 123)/3;

// question2:
if (johnTeamAverage > mikeTeamAverage) {
    console.log(`John's team wins, with an average of ${johnTeamAverage} points!`);
} else if (johnTeamAverage === mikeTeamAverage) {
    console.log(`Both teams are draw!`);
} else {
    console.log(`Mike's team wins, with an average of ${mikeTeamAverage} points!`);
}

//question3:
maryTeamAverage = (97 + 134 + 105)/3;

if ((johnTeamAverage > mikeTeamAverage) && (johnTeamAverage > maryTeamAverage)) {
    console.log(`John's team wins, with an average of ${johnTeamAverage} points!`);
} else if ((mikeTeamAverage > johnTeamAverage) && (mikeTeamAverage > maryTeamAverage)){
    console.log(`Mike's team wins, with an average of ${mikeTeamAverage} points!`);
} else if ((maryTeamAverage > johnTeamAverage) && (maryTeamAverage > mikeTeamAverage)){
    console.log(`Mary's team wins, with an average of ${maryTeamAverage} points!`);
} else {
    console.log(`All teams are draw!`);
}
