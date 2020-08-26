var questions = ["When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?", 
"Which Jamaican runner is an 11-time world champion and holds the record in the 100 and 200-meter race?",
"What does “HTTP” stand for?",
"What year was the very first model of the iPhone released?",
"Which planet is the hottest in the solar system?",
"Who was the first woman to win a Nobel Prize (in 1903)?",
"Which animal can be seen on the Porsche logo?",
"What name does deer meat go by?",
"What other name does corn go by?",
"Which bone are babies born without?",
"What is your body’s largest organ?",
"Which desert is the largest in the world?",
"What is the smallest country in the world?",
"Which musical legend is Jay-Z married to?",
"What genre of music did Taylor Swift start in?",
"Which Indiana Jones movie was released back in 1984?",
"Which cartoon character lives in a pineapple under the sea?",
"What name is used to refer to a group of frogs?",
"Which mammal has no vocal cords?"];//list of trivia questions
var answers= ["Six", "Usain Bolt", "HyperText Transfer Protocol", "2007","Venus","Marie Curie","Horse","Venison",
"Maize", "Knee cap", "Skin", "Sahara Desert", "Vatican City", "Beyonce", "Country","Indiana Jones and the Temple of Doom",
"Spongebob Squarepants", "Army","Giraffe"];//list of corresponding trivia answers
var points = 0;
var selectedQ;//index for a random question and corresponding answer
var firstClick = true;


onEvent("buttonStart", "click", function(event) {
  updateQA();
  firstClick = true;
});

onEvent("buttonEnter", "click", function(event) {
  if(firstClick){//checks if this is the first button click
    if(getText("text_inputAnswer")!=""){//checks to make sure that the answer box is not empty
      if(getText("text_inputAnswer").toLowerCase() == answers[selectedQ].toLowerCase()){
        points++;//if the answer is correct, points increases by one and the screen is updated
        updatePoints();
        setText("text_areaHint", "Correct!");
        firstClick = false;//makes sure that the button cannot be clicked again
          if(points>=10){
            setScreen("screenWin");//checks if user won the game
          }
      }else{
        points--;//if the answer is incorrect, points decreases by one and the screen is update
        updatePoints();
        //tells user the correct answer
        setText("text_areaHint", "Wrong, the correct answer was: "+answers[selectedQ]);
        firstClick = false;//checks if user won the game
      }
      
    }else{//if the answer box is empty, the user will have to try again
      setText("text_areaHint", "You left the answer blank, please try again. " + questions[selectedQ]);
    }
  }
});

function updateQA(){
  selectedQ = randomNumber(0, questions.length-1); //selects a random number for the index
  setText("text_areaHint", questions[selectedQ]);
  setText("text_inputAnswer", "");
}

function updatePoints(){
  if (points<10){
    setText("text_areaPoints", points);
  }
}

onEvent("buttonStar", "click", function(event) {
  setScreen("screenPlay");
});

onEvent("buttonAgain", "click", function(event) {
  setScreen("screenPlay");
  points = 0;//sets points to zero
  updateQA();
  updatePoints();
});
