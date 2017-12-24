function shout (incoming) {
 return incoming.toUpperCase();
}

function whisper (incoming) {
  return incoming.toLowerCase();
}

function logShout(incoming) {
  console.log(incoming.toUpperCase());
}


function logWhisper(incoming) {
  console.log(incoming.toLowerCase());
}

function sayHiToGrandma(phrase) {
  
  var retval = "no value set to return from sayHiToGrandma()";
  
  switch (phrase === phrase.toLowerCase()) {
    case true:  // lower case input
      retval = "I can\'t hear you!";
      break;
   case false: // either upper or mixed case input
      switch (phrase === phrase.toUpperCase()) {
        case true: // upper case input
          retval = "YES INDEED!";
          break;
        /*case false: // mixed case input
          retval = "I love you, too.";
          break;
        default: // shouldn't get here, but...
          retval = "sayHiToGrandma() fell through all switches.";
          break;
    default: // shouldn't get here, but...
      retval = "sayHiToGrandma() fell through first switch.";
      break;
    }*/
  }
  return retval;
}



