// Create your initial state object
var appState = {
   questions: [
   		{ 
   			question: "question1",
   			choices: ['bob','2', '3', '4'],
   			correctAnswer: 	0,
        giveFeedback: 0
   		},
      
      { 
        question: "question2",
        choices: ['bob','2', '3', '4'],
        correctAnswer: 'bob',
        giveFeedback: 0
      },

      { 
        question: "question3",
        choices: ['bob','2', '3', '4'],
        correctAnswer: 'bob',
        giveFeedback: 0
      },
      
      { 
        question: "question4",
        choices: ['bob','2', '3', '4'],
        correctAnswer: 'bob',
        giveFeedback: 0
      },
      
      { 
        question: "question5",
        choices: ['bob','2', '3', '4'],
        correctAnswer: 'bob',
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
  console.log(state.answerArray);
  console.log('outside the if statement');
  console.log(state.currentQuestionIndex);
  console.log(state.answerArray[state.currentQuestionIndex]);
  console.log(currentQuestion.correctAnswer);
	if (state.answerArray[state.currentQuestionIndex] === currentQuestion.correctAnswer) {
    console.log("Inside the If statement");
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

function loadQuestion(state, element) {
// call nextquestion
// make sure question was answered before
// call submitanswer --> if statement gives fb + score, which put into html
// // if last question results html ?
// forEach
// let quizHTML = state.questions.map(function(question) {
  let questionIndex = state.questions[state.currentQuestionIndex];
  let quizHTML;
  if(state.currentQuestionIndex === null) {
    quizHTML = `<section class='main-container'>
    <h1>Quiz</h1>
    <p>Let's take a quiz!</p>
    <button class='start-button' type='button'>Start</button>`
  }
  else if(state.currentQuestionIndex < state.questions.length && questionIndex.giveFeedback === 0) {
    quizHTML = `<form id='quiz-form'> 
    <p class='question'>${state.currentQuestionIndex+1}/${state.questions.length}: ${questionIndex.question}</p>
    <label class='option'><input type="radio" name="option" value='0'><span id='option0'>${questionIndex.choices[0]}</span></label>
    <label class='option'><input type="radio" name="option" value='1'><span id='option1'>${questionIndex.choices[1]}</span></label>
    <label class='option'><input type="radio" name="option" value='2'><span id='option2'>${questionIndex.choices[2]}</span></label>
    <label class='option'><input type="radio" name="option" value='3'><span id='option3'>${questionIndex.choices[3]}</span></label>
    </form>
    <button class='submit-answer' type='button'>Submit answer</button>`
    // <button class='hidden'>
  }
  else if (state.currentQuestionIndex < state.questions.length && questionIndex.giveFeedback === 1) {
    quizHTML = `<p>Correct! You have anwered ${state.score} out of ${state.questions.length} correct so far!</p>
    <button class='next-question' type='button'>Next question</button>`
  }
  else if (state.currentQuestionIndex < state.questions.length && questionIndex.giveFeedback === 2) {
    quizHTML = `<p>Wrong! The correct answer is ${questionIndex.choices[questionIndex.correctAnswer]}. You have anwered ${state.score} out of ${state.questions.length} correct so far!</p>
    <button class='next-question' type='button'>Next question</button>`
  }
  else {
    quizHTML = `<section class='results'>
    <p class ='your-score'>You scored ${state.score} out of ${state.questions.length} correct!</p>
    <button class='start-over' type='button'>Start Over</button>
    </section>`;
  }

  $(element).html(quizHTML);
}


//non skippable
// Event handlers
$(function(){
  // When start button is submitted
  loadQuestion(appState, $('.main-container'));

  $('.main-container').on('click', '.start-button',function(event) {
    nextQuestion(appState);
    loadQuestion(appState, $('.main-container'));  
  });

  // Current answer is submitted
  $('.main-container').on('click','.submit-answer',function(event) {
    var selectedOption = $('input[type=radio]:checked');
    var answer = parseInt(selectedOption.val());
    // console.log(`Answer: ${answer}`);
    submitAnswer(appState, answer);
    loadQuestion(appState, $('.main-container'));
    nextQuestion(appState);

    // console.log(` AnswerArray = ${appState.answerArray}`);
    // console.log(` Feedback = ${appState.questions[0].giveFeedback}`);
  });

  // Next question
  $('.main-container').on('click','.next-question',function(event) {
  });

  // Restart button is clicked
  $('.results').on('click', '.start-over',function(event) {
  });
});