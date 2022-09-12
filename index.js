var readlineSync = require('readline-sync');
var score = 0;
var username = readlineSync.question("what is your name..?")
console.log("hello " + username + " do you know rahul..?")
function play(question, answer) {
  var useranswer = readlineSync.question(question)
  if (answer === useranswer) {
    console.log("right!")
    score = score + 1;
  }

  else {
    console.log("wrong!")
  } console.log("your score is=" + score)
}
var questions = [
  {
    question: "Where do I live.? ",
    answer: "beawar"
  }, {
    question: "what is my fav.spor.? ",
    answer: "basketball"
  }, {
    question: "my fav. movie star.? ",
    answer: "sidharth malhotra"
  }, {
    question: "my fav. street food.? ",
    answer: "momos"
  }, {
    question: "my fav.car.? ",
    answer: "Aston Martin DB-11"
  }];

for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
};
console.log("thanks for playing your Total score is=" + score);


