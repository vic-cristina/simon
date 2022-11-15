const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStart = false;
var level = 0;

function nextSequence() {
  userClickedPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  //Animation
  $("#" + randomChosenColor).fadeTo(100, 0.3, function () {
    $(this).fadeTo(500, 1.0);
  });
  //Logs
  console.log("randomChosenColor", randomChosenColor);
  console.log("gamePatternArray", gamePattern);

  playSound(randomChosenColor);
  level++;
  $("h1").text("Level " + level);
  return gamePattern;
}

function playSound(name) {
  let btnPlay = new Audio("/sounds/" + name + ".mp3");
  btnPlay.play();
}

function animatePress(currentColor) {
  let pressedBtn = $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    pressedBtn.removeClass("pressed");
  }, 100);
}

//These conditional statements need to gitgud
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    setTimeout(() => {
      console.log("success");
    }, 500);
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => nextSequence(), 1000);
    }
  } else {
    console.log("wrong");
    let btnWrong = new Audio("/sounds/wrong.mp3");
    btnWrong.play();
    let gameOver = $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(() => gameOver.removeClass("game-over"), 500);
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStart = false;
}

/** When the click event is captured by the object, it stores the ID of the button clicked
 * Then we 1.store it into an array 2.use it as a string as a parameter for playSound
 */
$(".btn").on("click", function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log("The user clicked on", userChosenColor);
  console.log("userPatternArray", userClickedPattern);
  //nextSequence();
  animatePress(userChosenColor);
  playSound(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

$(document).on("keydown", function () {
  if (gameStart === false) {
    gameStart = true;
    $("h1").text("Level " + level);
    nextSequence();
  } else {
    return 0;
  }
});
