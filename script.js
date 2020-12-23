const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

// questions are here 
const myQuestions = [
    {
      question: "Whos is フシギダネ?",
      answers: {
        a: "Squirtle",
        b: "Charmander",
        c: "Bulbasaur"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a Katakana for 'Pijotto' ",
      answers: {
        a: "コクーン",
        b: "キャタピー",
        c: "ピジョット"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of these is the key item 'Bicycle' ",
      answers: {
        a: "ひみつのコハク",
        b: "かいのカセキ",
        c: "カードキー",
        d: "じてんしゃ"
      },
      correctAnswer: "d"
    }
  ];