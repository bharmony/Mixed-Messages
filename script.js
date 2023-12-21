var NumberOfWords = 9;

var words = new BuildArray(NumberOfWords);

// Use the following variables to
// define your random words:
words[1] = "yes";
words[2] = "no";
words[3] = "maybe";
words[4] = "signs point to yes";
words[5] = "signs point to no";
words[6] = "ask again later";
words[7] = "most likely";
words[8] = "don't bet on it";
words[9] = "doubtful";
words[10] = "definitely";

function BuildArray(size) {
  this.length = size;
  for (var i = 1; i <= size; i++) {
    this[i] = null;
  }
  return this;
}

function PickRandomWord(frm) {
  // Generate a random number between 1 and NumberOfWords
  var rnd = Math.ceil(Math.random() * NumberOfWords);

  frm.WordBox.value = words[rnd];
}
