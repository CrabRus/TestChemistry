var questions = [
  {
    question: "1. Cкільки хімічних елементів відомо на наш час?",
    answers: {
      1: "110",
      2: "118",
      3: "89",
      4: "113",
    },
    rightAnswer: "2",
  },

  {
    question: "2. Найпошириніший хімічний елеиент у Всесвіті?",
    answers: {
      1: "Гелій",
      2: "Кремній",
      3: "Водень",
      4: "Уран",
    },
    rightAnswer: "3",
  },

  {
    question: "Речовина - це...",
    answers: {
      1: "те, з чого складаються тільки тіла живої природи",
      2: "те, з чого складаються тільки тіла неживої природи",
      3: "це те, з чого складається фізичне тіло ",
    },
    rightAnswer: "3",
  },

  {
    question:
      "4. Перехід речовини з твердого агрегатного стану в рідкий називається:",
    answers: {
      1: "конденсація",
      2: "сублімація",
      3: "хімізація",
      4: "плавлення",
    },
    rightAnswer: "4",
  },

  {
    question: "5. Укажіть просту речовину:",
    answers: {
      1: "алмаз",
      2: "цемент",
      3: "целюлоза",
      4: "скло",
    },
    rightAnswer: "1",
  },
  {
    question: "6. Какая валентность N в N2O5",
    answers: {
      1: "1",
      2: "2",
      3: "4",
      4: "5",
    },
    rightAnswer: "3",
  },
  {
    question:
      "7. Чи вірні такі міркування: " +
      "<br>" +
      "     1. Основи взаємодіють з основними та кислотними оксидами" +
      "<br>" +
      "     2. Реакція лугів з кислотами називається реакція нейтралізації",
    answers: {
      1: "вірно лише 1алмаз",
      2: "вірні обидва судження",
      3: "цвірно лише 2",
      4: "обидва судження невірні",
    },
    rightAnswer: "4",
  },
  {
    question:
      "8. Укажіть класи речовин, між якими відбувається реакція нейтралізації:",
    answers: {
      1: "метал і кислота",
      2: "основи та кислоти",
      3: "основні та кислотні оксиди",
      4: "солі та кислоти",
    },
    rightAnswer: "2",
  },
  {
    question: "9. Обрати елемент з найвищою електронегативністю:",
    answers: {
      1: "Гідроген",
      2: "Оксиген",
      3: "Нітроген",
      4: "Силіцій",
    },
    rightAnswer: "2",
  },
  {
    question:
      "10. У періоді зліва направо електронегативність хімічних елементів:",
    answers: {
      1: "зменшується",
      2: "зростає",
      3: "не змінюється",
    },
    rightAnswer: "2",
  },
];

var testContainer = document.getElementById("test");
var resultButton = document.getElementById("resultButton");
var resultsConteiner = document.getElementById("results");

generateTest(questions, testContainer, resultButton, resultsConteiner);

function generateTest(
  questions,
  testContainer,
  resultButton,
  resultsConteiner
) {
  function showQuestions(questions, testContainer) {
    var out = [];
    var answer;

    for (var i = 0; i < questions.length; i++) {
      answers = [];
      for (var ans_text in questions[i].answers) {
        answers.push(
          '<label><br><input type ="radio" name="question' +
            i +
            '" value="' +
            ans_text +
            '">' +
            ans_text +
            ") " +
            questions[i].answers[ans_text] +
            "</label>"
        );
      }
      out.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }
    testContainer.innerHTML = out.join("");
  }

  function showResults(questions, testContainer, resultsConteiner) {
    var answerConteiners = testContainer.querySelectorAll(".answers");

    var userAnswer = "";
    var rightAnswerNum = 0;

    for (var i = 0; i < questions.length; i++) {
      userAnswer = (
        answerConteiners[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      if (userAnswer == questions[i].rightAnswer) {
        answerConteiners[i].style.color = "green";
        rightAnswerNum++;
      } else {
        answerConteiners[i].style.color = "red";
      }
    }
    var resultsString;
    if (rightAnswerNum <= 4) {
      resultsString = "Погано";
    } else if (rightAnswerNum <= 6) {
      resultsString = "Треба повторити";
    } else if (rightAnswerNum < 10) {
      resultsString = "Добре";
    } else if (rightAnswerNum >= 10) {
      resultsString = "Відмінно";
    }
    resultsConteiner.innerHTML = resultsString;
  }

  showQuestions(questions, testContainer);
  resultButton.onclick = function () {
    showResults(questions, testContainer, resultsConteiner);
  };
}
