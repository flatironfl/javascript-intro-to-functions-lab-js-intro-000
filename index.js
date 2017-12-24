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
  switch phrase === phrase.toLowerCase():
    case true: 
      return "I can\'t hear you!";
    case false: 
      switch phrase ==== phrase.toUpperCase():
        case true:
          return 
}



describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })