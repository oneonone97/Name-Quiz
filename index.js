var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + "!" + " Do you know Rohan? ");

// play function

function play(question, answer){
  var userName = readlineSync.question(question);
  
   if (userName === answer){
  console.log("right!");
  score = score + 1;
  } else {
    console.log("wrong")
  }
  console.log("current score: ", score);
  console.log("---------------");
}
 
 //array of objects

var questions = [{
  question: "Where do I live? ",
  answer: "Gorakhpur"
}, {
  question: "What role I am intrested? ",
  answer: "Frontend Developer"
}];

//loop

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
