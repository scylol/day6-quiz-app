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
   currentQuestionIndex: 1,
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
  		return true;
  	}
   	else if(state.currentQuestionIndex === state.questions.length-1) {
  		return false;
  	}
  	else {
  		state.currentQuestionIndex++;
  		return true;
  	}
}

// Render functions...
// var renderList = function(state, element) {
//     var itemsHTML = state.items.map(function(item) {
//         return '<li>' + item + '</li>';
//     });
//     element.html(itemsHTML);
// };

function loadQuestion(state, element) {
// call nextquestion
// make sure question was answered before
// call submitanswer --> if statement gives fb + score, which put into html
// // if last question results html ?
// forEach
  // let quizHTML = state.questions.map(function(question) {
    let choiceValue = state.questions[state.currentQuestionIndex].choices;
    let quizHTML =
         `<form id='quiz-form'>
            <p class='question'>${state.questions[state.currentQuestionIndex].question}</p>
            <label class='option'><input type="radio" name="option" value='0'><span id='option 0'>${choiceValue[0]}</span></label>
            <label class='option'><input type="radio" name="option" value='1'><span id='option 1'>${choiceValue[1]}</span></label>
            <label class='option'><input type="radio" name="option" value='2'><span id='option 2'>${choiceValue[2]}</span></label>
            <label class='option'><input type="radio" name="option" value='3'><span id='option 3'>${choiceValue[3]}</span></label>
          </form>
          <button type='submit'>Submit answer</button>
          <button type='button'>Next question</button>`;
  $(element).html(quizHTML);
}



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