// Create your initial state object
var appState = {
  questions: [
    { 
      question: "Who is Pharah's mother?",
      choices: ["Mercy","Ana","Torbjorn","Diva"],
      correctAnswer: 1,
      // Feedback changes to 1 for correct, changes to 2 for incorrect
      giveFeedback: 0
    },

    { 
      question: "Which of these characters is not a support?",
      choices: ["Tracer","Lucio","Symmetra","Mercy"],
      correctAnswer: 0,
      // Feedback changes to 1 for correct, changes to 2 for incorrect
      giveFeedback: 0
    },

    { 
      question: "What is the name of Reinhardt's ultimate ability?",
      choices: ["Rip-tire","Sound-barrier","Pulse Bomb","Earthshatter"],
      correctAnswer: 3,
      // Feedback changes to 1 for correct, changes to 2 for incorrect
      giveFeedback: 0
    },

    { 
      question: "Who is the brother of Genji?",
      choices: ["Soldier76","Hanzo","Roadhog","Bastion"],
      correctAnswer: 1,
      // Feedback changes to 1 for correct, changes to 2 for incorrect
      giveFeedback: 0
    },

    { 
      question: "Which of these heroes has no soul?",
      choices: ["Reaper","Mei","Junkrat","Zarya"],
      correctAnswer: 1,
      // Feedback changes to 1 for correct, changes to 2 for incorrect
      giveFeedback: 0
    }

    ],
      score: 0,
      currentQuestionIndex: null,
      answerArray: []
};


// State manipulation functions...
// function to check user answer (if statement display fb)
function submitAnswer(state, userInput) {
  const currentQuestion = state.questions[state.currentQuestionIndex];
  state.answerArray.push(userInput);
}

function nextQuestion(state) {
  if(state.currentQuestionIndex === null) {
    state.currentQuestionIndex = 0;
  }
  else {
    state.currentQuestionIndex++;
  }
}

function getFeedback(state) {
  const currentQuestion = state.questions[state.currentQuestionIndex];
  if (state.answerArray[state.currentQuestionIndex] === currentQuestion.correctAnswer) {
    currentQuestion.giveFeedback = 1;
    state.score++;
  } else {
    currentQuestion.giveFeedback = 2;
  }
}

function loadQuestion(state, element) {

  let questionIndex = state.questions[state.currentQuestionIndex];
  let quizHTML;
  if(state.currentQuestionIndex === null) {
    quizHTML = `<h1>Overwatch Quiz</h1>
    <p>This Quiz is about the game Overwatch, created by Blizzard Entertainment.
    Please take as much time as you need to answer all of the questions.
    When you are ready to begin, hit the start button. Good Luck!</p>
    <button class='start-button' type='button'>Start</button>`
  }
  else if(state.currentQuestionIndex < state.questions.length && questionIndex.giveFeedback === 0) {
    quizHTML = `<section class="quiz"><form id='quiz-form'> 
    <p class='question'>${state.currentQuestionIndex+1}/${state.questions.length}: ${questionIndex.question}</p>
    <label class='option'><input type="radio" name="option" value='0'><span id='option0'>${questionIndex.choices[0]}</span></label>
    <label class='option'><input type="radio" name="option" value='1'><span id='option1'>${questionIndex.choices[1]}</span></label>
    <label class='option'><input type="radio" name="option" value='2'><span id='option2'>${questionIndex.choices[2]}</span></label>
    <label class='option'><input type="radio" name="option" value='3'><span id='option3'>${questionIndex.choices[3]}</span></label>
    </form>
    <button class='submit-answer' type='button'>Submit answer</button>
    </section>`

  }
  else if(state.currentQuestionIndex === state.questions.length-1 && questionIndex.giveFeedback === 1) {
        quizHTML = `<section class="quiz"><p class='feedback'>Correct! You have anwered ${state.score} out of ${state.questions.length} correct so far!</p>
    <button class='next-question' type='button'>Show Results!</button>
    </section>` 
  }
  else if(state.currentQuestionIndex === state.questions.length-1 && questionIndex.giveFeedback === 2) {
        quizHTML = `<section class="quiz"><p class='feedback'>Wrong! The correct answer is ${questionIndex.choices[questionIndex.correctAnswer]}. You have anwered ${state.score} out of ${state.questions.length} correct so far!</p>
    <button class='next-question' type='button'>Show Results</button>
    </section>` 
  }
  else if (state.currentQuestionIndex < state.questions.length && questionIndex.giveFeedback === 1) {
    quizHTML = `<section class="quiz"><p class='feedback'>Correct! You have anwered ${state.score} out of ${state.questions.length} correct so far!</p>
    <button class='next-question' type='button'>Next question</button>
    </section>`
  }
  else if (state.currentQuestionIndex < state.questions.length && questionIndex.giveFeedback === 2) {
    quizHTML = `<section class="quiz"><p class='feedback'>Wrong! The correct answer is ${questionIndex.choices[questionIndex.correctAnswer]}. You have anwered ${state.score} out of ${state.questions.length} correct so far!</p>
    <button class='next-question' type='button'>Next question</button>
    </section>`

  }
  else {
    quizHTML = `<section class="quiz">
    <p class ='your-score'>You scored ${state.score} out of ${state.questions.length} correct!</p>
    <button class='start-over' type='button'>Start Over</button>
    </section>`
  }

    $(element).html(quizHTML);
}


$(function(){

  loadQuestion(appState, $('.main-container'));

  // When start button is submitted
  $('.main-container').on('click', '.start-button',function(event) {
    nextQuestion(appState);
    loadQuestion(appState, $('.main-container'));  
  });
  // Current answer is submitted
  $('.main-container').on('click','.submit-answer',function(event) {
    let selectedOption = $('input[type=radio]:checked');
    let answer = parseInt(selectedOption.val());
  if(selectedOption.length === 0) {
    $('.error-text').text("Please select an answer!!!");
  }
  else {
    submitAnswer(appState, answer);
    getFeedback(appState);
    loadQuestion(appState, $('.main-container'));
    $('.error-text').text("");
  }
});
  // next question
  $('.main-container').on('click','.next-question',function(event) {
    let selectedOption = $('input[type=radio]:checked');
    let answer = parseInt(selectedOption.val()); 

    nextQuestion(appState);
    loadQuestion(appState, $('.main-container'));
  });
  // Restart button is clicked
  $('.main-container').on('click', '.start-over',function(event) {
    appState.currentQuestionIndex = null;
    appState.score = 0;
    appState.answerArray=[];
    
    appState.questions.forEach(function(val){
      val.giveFeedback = 0;
    });
    
    loadQuestion(appState, $('.main-container'));  
    nextQuestion(appState);
    loadQuestion(appState, $('.main-container'));  
    });
});