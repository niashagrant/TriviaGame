$(document).ready(function() {
  var triviaQuestions = [
    {
      question: "What structures are necessary for conjugation?",
      choice: ["Fimbriae", "DNA probe", "Pili", "Glycocalyx"],
      answer: "Pili"
    },
    {
      question:
        "What type of molecule is the capsid surrounding the virus made of?",
      choice: ["DNA", "Cellulose", "RNA", "Protein"],
      answer: "Protein"
    },
    {
      question: "What is a flagellum used for?",
      choice: ["Fighting", "Moving", "Eating", "Digesting"],
      answer: "Moving"
    },
    {
      question:
        "Not all microbial processes are bad. Some foods are actually produced by the action of microbes. Which one of the following foods is produced, in part, by a microbial process?",
      choice: ["French Fries", "Pasta", "Chips", "Yogurt"],
      answer: "Yogurt"
    },
    {
      question:
        "There are different types of microbes. Which one of the following is NOT a microbe?",
      choice: ["Bacterium", "Virus", "Atom", "Yeast"],
      answer: "Atom"
    },
    {
      question:
        "In 1928, Alexander Fleming discovered the first antibiotic. What was this antibiotic called?",
      choice: ["Erythromycin", "Penicillin", "Ampicillin", "Tetracyclin"],
      answer: "Penicillin"
    },
    {
      question: "Which of these organelles can be found in a bacterial cell?",
      choice: ["Chloroplast", "Nucleus", " Mitochondria", "Ribosomes"],
      answer: "Ribosomes"
    },
    {
      question:
        "What process can bacterial cells undergo that allows them to pick up DNA fragments in their environment and incorporate them into their genome?",
      choice: [
        "Transduction",
        "Replication",
        "Recombination",
        "Transformation"
      ],
      answer: "Transformation"
    },
    {
      question: "True or False: Bacterial cells undergo genetic recombination.",
      choice: ["True", "False"],
      answer: "True"
    },
    {
      question:
        "What is the direct transfer of genetic material between two bacterial cells that are temporarily joined?",
      choice: ["Conjugation", "Replication", "Transduction", "Recombination"],
      answer: "Conjugation"
    }
  ];

  var counter = 25;
  var currentQuestion = 0;
  var score = 0;
  var lost = 0;
  var timer;

  function nextQuestion() {
    var isQuestionOver = triviaQuestions.length - 1 === currentQuestion;
    if (isQuestionOver) {
      displayResult();
      console.log("Game is over");
    } else {
      currentQuestion++;
      loadQuestion();
    }
  }

  function timeUp() {
    clearInterval(timer);

    lost++;
    nextQuestion();
  }

  function countDown() {
    counter--;

    $("#timer").html("Timer: " + counter);

    if (counter === 0) {
      timeUp();
    }
  }

  function loadQuestion() {
    counter = 25;
    timer = setInterval(countDown, 1000);

    var questions = triviaQuestions[currentQuestion].question;
    var choices = triviaQuestions[currentQuestion].choice;

    $("#timer").html("Timer: " + counter);
    $("#game").html(`
    <h4>${questions}</h4>
    ${loadChoices(choices)}
    `);
  }

  function loadChoices(choices) {
    var result = "";
    for (var i = 0; i < choices.length; i++) {
      result += `<p class="choice" data-answer=${choices[i]}>${choices[i]}</p>`;
    }
    return result;
  }

  $(document).on("click", ".choice", function() {
    clearInterval(timer);
    var selectedAnswer = $(this).attr("data-answer");
    var correctAnswer = triviaQuestions[currentQuestion].answer;

    if (correctAnswer === selectedAnswer) {
      score++;
      nextQuestion();
      console.log("won");
    } else {
      lost++;
      console.log("lost");
      nextQuestion();
    }
  });

  function displayResult() {
    var result = `
      <p>You got ${score} questions right </p>
      <p>You missed ${lost} questions </p>
      <p>There are ${triviaQuestions.length} total questions</p>
      <a
          class="btn btn-info btn-lg"
          style="color: rgb(253, 245, 230);"
          href="#"
          role="button"
          id="playAgain"
          >Play Again?</a
        >
      `;
    $("#game").html(result);
  }

  loadQuestion();
});
