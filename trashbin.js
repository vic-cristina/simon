switch (nextSequence()) {
  case 0:
    randomChosenColor.push = buttonColors[0];
    console.log("randomcolor", randomChosenColor[0]);
    break;
  case 1:
    randomchosenColor.push = "blue";
    console.log("randomcolor", randomChosenColor[0]);
    break;
  case 2:
    randomChosenColor.push = "green";
    console.log("randomcolor", randomChosenColor[0]);
    break;
  case 3:
    randomchosenColor.push = "yellow";
    console.log("randomcolor", randomChosenColor[0]);
    break;

  default:
    console.log(e.key);
    break;
}

const equals = (userClickedPattern, gamePattern) =>
  JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern);

//let randomChosenColor = []; should this really be an array?
/* $(selector).select(function () { 
    
}); */

/**
 * This function generates a random number which is used as an index of buttonColors with the slice() method
 * slice() receives +1 in the second param in order to grab the correct element
 * since randomChosenColor is picked pseudo-randomly from buttonColors
 * we push it to the gamePattern array, which will be used later on the left-hand side of a conditional statement
 * let randomChosenColor = buttonColors.slice(randomNumber, randomNumber + 1); -> Populates the variable with length_1 arrays
 *
 */
