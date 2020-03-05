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
        "Some foods are actually produced by the action of microbes. Which one of the following foods is produced, in part, by a microbial process?",
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

  var rightImages = [
    "https://media1.giphy.com/media/s92f9UTsinNDy/200.webp?cid=790b76113dd0a2d7fb6e83b3c1a614d1f569a7557a7ff7ab&rid=200.webp",
    "https://media3.giphy.com/media/fvT2lZ7UFAvHpPjmVs/giphy.webp?cid=790b76113dd0a2d7fb6e83b3c1a614d1f569a7557a7ff7ab&rid=giphy.webp",
    "https://media3.giphy.com/media/pNpONEEg3pLIQ/giphy.webp?cid=790b76113dd0a2d7fb6e83b3c1a614d1f569a7557a7ff7ab&rid=giphy.webp",
    "https://media2.giphy.com/media/3o7abKhOpu0NwenH3O/200.webp?cid=790b76113dd0a2d7fb6e83b3c1a614d1f569a7557a7ff7ab&rid=200.webp",
    "https://media1.giphy.com/media/1fgI4bZpCo9S57r4Vd/giphy.webp?cid=790b7611d8ba598b81cc1dd3ac614dbf73d5af1b86ad9933&rid=giphy.webp",
    "https://media3.giphy.com/media/Tjp51Zek2a3KWIFjQK/200.webp?cid=790b7611d8ba598b81cc1dd3ac614dbf73d5af1b86ad9933&rid=200.webp",
    "https://media2.giphy.com/media/1wXdllY4NCaHaCZOOb/giphy.webp?cid=790b76110fe52d5427106a2481ba15a0ee8e97cb9d258f31&rid=giphy.webp",
    "https://media1.giphy.com/media/26uf6o80xhd6MKGIw/200.webp?cid=790b76115a2aa54e2c12ee7e4e8ed07346c0ce725d34724d&rid=200.webp",
    "https://media1.giphy.com/media/NEvPzZ8bd1V4Y/giphy.webp?cid=790b7611aa57d9867c11fe280c58dc6e886f4a7179e64868&rid=giphy.webp",
    "https://media2.giphy.com/media/xT9IgKWQeoclWggTDO/giphy.webp?cid=790b76110855a64e914b32ff33b5962bda38c27729bb44ab&rid=giphy.webp"
  ];

  var wrongImages = [
    "https://media0.giphy.com/media/l4pLY0zySvluEvr0c/200.webp?cid=790b761139a7d6c9f59453e952f9b2a68fee94f3fc44c667&rid=200.webp",
    "https://media0.giphy.com/media/4OJFCEeGzYGs0/200.webp?cid=790b761139a7d6c9f59453e952f9b2a68fee94f3fc44c667&rid=200.webp",
    "https://media2.giphy.com/media/UX06yZ6erE0fQtU1Sd/giphy.webp?cid=790b761180f4a6c498c26be3055ae0a5361c83f589694139&rid=giphy.webp",
    "https://media2.giphy.com/media/mEbBlAsB0vdQ3uPR3t/giphy.webp?cid=790b7611e7e1e18c982990b79c57aa078bd8ff3ed3e9e4ea&rid=giphy.webp",
    "https://media1.giphy.com/media/xVIkfXYGTJeZKilg3p/giphy.webp?cid=790b7611ea12b32c2a8bf5367056b6bc66a9caade0da8f89&rid=giphy.webp",
    "https://media3.giphy.com/media/nR4L10XlJcSeQ/200.webp?cid=790b761138df3ce49067bf87517057dc0949a196402d4551&rid=200.webp",
    "https://media1.giphy.com/media/gnE4FFhtFoLKM/giphy.webp?cid=790b761138df3ce49067bf87517057dc0949a196402d4551&rid=giphy.webp",
    "https://media3.giphy.com/media/LOEI8jsNKPmzdJYvhJ/200.webp?cid=790b7611f8b87363aaa6b896c677b668edcd618e12d4066f&rid=200.webp",
    "https://media1.giphy.com/media/W4X6HuX1ZVIEGFSvVD/giphy.webp?cid=790b7611c21c30fab589b55e04672b617b023a0a858463e9&rid=giphy.webp",
    "https://media1.giphy.com/media/1zSz5MVw4zKg0/giphy.webp?cid=790b7611e5e3b6ed9f135efca563232900eb001a97ab020b&rid=giphy.webp"
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

    preLoadImage("lost");
    setTimeout(nextQuestion, 3 * 1000);
    // nextQuestion();
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
    ${loadRemainingQuestions()}
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
      preLoadImage("win");
      setTimeout(nextQuestion, 3 * 1000);
      console.log("won");
    } else {
      lost++;
      preLoadImage("lost");
      console.log("lost");
      setTimeout(nextQuestion, 3 * 1000);
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

  $(document).on("click", "#playAgain", function() {
    counter = 25;
    currentQuestion = 0;
    score = 0;
    lost = 0;
    timer = null;

    loadQuestion();
  });

  function loadRemainingQuestions() {
    var remainingQuestion = triviaQuestions.length - (currentQuestion + 1);
    var totalQuestions = triviaQuestions.length;

    return `Remaining Question: ${remainingQuestion}/${totalQuestions}`;
  }

  function randomImage(images) {
    const random = Math.floor(Math.random() * images.length);
    const randomImage = images[random];
    return randomImage;
  }

  function preLoadImage(status) {
    var correctAnswer = triviaQuestions[currentQuestion].answer;
    if (status === "win") {
      $("#game").html(`
        <p class="preload-image "><h2>Congratulations, you know your microbiology!</h2></p>
        <p class="preload-image"><h4>The correct answer is <b>${correctAnswer}</b></h4></p>
        <img src="${randomImage(rightImages)}" />
        `);
    } else {
      $("#game").html(`
        <p class="preload-image"><h2>You dont know your microbiology!</h2></p>
        <p class="preload-image"><h4>The correct answer was <b>${correctAnswer}</b></h4></p>
        <img src="${randomImage(wrongImages)}" />
        `);
    }
  }

  $(".card").hide();
  $("#startGame").click(function() {
    $("#startGame").remove();
    $(".card").show();
    $("#timer").html(counter);
    loadQuestion();
  });
});
