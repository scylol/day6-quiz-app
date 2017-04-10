// Create your initial state object
var appState = {
   questions: [
   		{ 
   			question: "question1",
   			choices: ['bob','2', '3', '4'],
   			correctAnswer: 	'bob',
        	giveFeedback: 0
   		},
      
      { 
        question: "question2",
        choices: ['bob','2', '3', '4'],
        correctAnswer: 1,
       giveFeedback: 0
      },

      { 
        question: "question3",
        choices: ['bob','2', '3', '4'],
        correctAnswer: 2,
        giveFeedback: 0
      },
      
      { 
        question: "question4",
        choices: ['bob','2', '3', '4'],
        correctAnswer: 3,
        giveFeedback: 0
      },
      
      { 
        question: "question5",
        choices: ['bob','2', '3', '4'],
        correctAnswer: 4,
        giveFeedback: 0
      }

   ],
   score: 0,
   currentQuestionIndex: null,
   answerArray: []
    // Answers
    // User's answer choice(s)	
    // Message(s) to let them know they have the correct answer	
    // Message(s) when they don't have the correct answer
    // Other things like score? Anything else?
};



// State manipulation functions...
// function to check user answer (if statement display fb)
function submitAnswer(state, userInput) {
	const currentQuestion = state.questions[state.currentQuestionIndex];
	
	state.answerArray.push(userInput);
	if (state.answerArray[state.currentQuestionIndex] === currentQuestion.correctAnswer) {
		currentQuestion.giveFeedback = 1;
		state.score++;
	} else {
		currentQuestion.giveFeedback = 2;

	}

	


}

  function nextQuestion(state) {
  	//incrementing currentQuestionIndex
  	// if on last question, show results page after clicking next
  	if(state.currentQuestionIndex === null) {
  		state.currentQuestionIndex = 0;
  	}
   	else {
  		state.currentQuestionIndex++;
  	}
}


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