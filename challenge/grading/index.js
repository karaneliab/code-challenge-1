
// declared a variable to store the grade
let grade;
// Prompt the user to enter the student score
let score = prompt("Enter your Totalscore");

// check the score rate and assign grade accordingly
// javascript will convert the string to a number for comparison
    if(score > 79 && score <= 100){
        grade = "A";
    } else if (score >= 60 && score <= 79){
        grade = "B";
    } else if (score >= 49 && score <= 59){
        grade = "C";
    } else if (score>= 40 && score < 49){
        grade = "D";
    } else {
        grade = "E";
    }
    // display the grade in the console
    console.log("Grade:" + grade);