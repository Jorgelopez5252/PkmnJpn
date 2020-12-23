function buildQuiz() {
  // variable to store the HTML output
const output = [];

// for each question...
myQuestions.forEach(
  (currentQuestion, questionNumber) => {

    // variable to store the list of possible answers
    const answers = [];

    // and for each available answer...
    for(letter in currentQuestion.answers){

      // ...add an HTML radio button
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join('')} </div>`
    );
  }
);

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');
}

function showResults() {
  // gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach( (currentQuestion, questionNumber) => {

  // find selected answer
  const answerContainer = answerContainers[questionNumber];
  const selector = `input[name=question${questionNumber}]:checked`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  // if answer is correct
  if(userAnswer === currentQuestion.correctAnswer){
    // add to the number of correct answers
    numCorrect++;

    // color the answers green
    answerContainers[questionNumber].style.color = 'lightgreen';
  }
  // if answer is wrong or blank
  else{
    // color the answers red
    answerContainers[questionNumber].style.color = 'red';
  }
});

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const myQuestions = [
  {
      question: "1.) Whos is フシギダネ? (english name)",
      answers: {
        a: "Squirtle",
        b: "Charmander",
        c: "Bulbasaur"
      },
      correctAnswer: "c"
    },
    {
      question: "2.) Which one of these is a Katakana for 'Pijotto' ",
      answers: {
        a: "コクーン",
        b: "キャタピー",
        c: "ピジョット"
      },
      correctAnswer: "c"
    },
    {
      question: "3.) Which of these is 'キャタピー' ",
      answers: {
        a: "Toranseru",
        b: "Hitokage",
        c: "Zenigame",
        d: "Kyatapī"
      },
      correctAnswer: "d",
    },
    {
      question: "4.) Whats the Kanji for Batafurī",
      answers: {
        a: "ラッタ",
        b: "バタフリー",
        c: "ピジョン"
      },
      correctAnswer: "b"
    },
    {
      question: "5.) What is Pidgey Romanji name?",
      answers: {
        a: "Poppo",
        b: "Pijon",
        c: "Pijotto"
      },
      correctAnswer: "a"
    },
    {
      question: "6.) What is Pikachu's Kanji Name?",
      answers: {
        a: "カメックス",
        b: "アーボ",
        c: "ピカチュウ",
        d: "オニスズメ",
      },
      correctAnswer: "c"
    },
    {
      question: "7.) Whos is リザードン(english name?)",
      answers: {
        a: "Charizard",
        b: "Rhydon",
        c: "Raichu",
        d: "Mew"
      },
      correctAnswer: "a"
    },
];

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
