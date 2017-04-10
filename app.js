// Create your initial state object
var appState = {
   questions: [
   		{ 
   			question: "question1",
   			choices: ['bob','2', '3', '4'],
   			correctAnswer: 0,
        goodFeedback: 'Correct',
        badFeedback: 'Incorrect, the correct answer was bob'
   		},
      
      { 
        question: "question2",
        choices: ['bob','2', '3', '4'],
        correctAnswer: 1,
        goodFeedback: 'Correct',
        badFeedback: 'Incorrect, the correct answer was 2'
      },

      { 
        question: "question3",
        choices: ['bob','2', '3', '4'],
        correctAnswer: 2,
        goodFeedback: 'Correct',
        badFeedback: 'Incorrect, the correct answer was 3'
      },
      
      { 
        question: "question4",
        choices: ['bob','2', '3', '4'],
        correctAnswer: 3,
        goodFeedback: 'Correct',
        badFeedback: 'Incorrect, the correct answer was 4'
      },
      
      { 
        question: "question5",
        choices: ['bob','2', '3', '4'],
        correctAnswer: 4,
        goodFeedback: 'Correct',
        badFeedback: 'Incorrect, the correct answer was bob'
      }

   ],
   score: 0
    // Answers
    // User's answer choice(s)	
    // Message(s) to let them know they have the correct answer	
    // Message(s) when they don't have the correct answer
    // Other things like score? Anything else?
};

console.log(appState.quiz[0].question);

// State manipulation functions...
// function to check user answer (if statement display fb)
function checkAnswer(appState, userInput, currentQuestion) {
  if (userInput === appState.questions[currentQuestion].correctAnswer){
    appState.questions[currentQuestion].goodFeedback;
    score++;
  }
  else {
    appState.questions[currentQuestion].badFeedback;
  }

// State manipulation functions...
// Render functions...

// Event handlers
// When start button is submitted
$('.start').submit(function(event) {
});

// Current answer is submitted
$('.answer').submit(function(event) {
});

// Next question
$('.next').click(function(event) {
});

// Restart button is clicked
$('.restart').click(function(event) {
});