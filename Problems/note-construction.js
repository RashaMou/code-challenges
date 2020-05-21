/**
 * Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is
. 
 */

function constructNote(magazine, note) {
  // brute force
  if (magazine.length < note.lenght) {
    return false;
  }
  const new_arr = [];
  while (note.length > 0) {
    for (let i = 0; i < note.length; i++) {
      console.log(note[i]);
      magazine.forEach((word) => {
        if (magazine.includes(note[i])) {
          new_arr.push(note.splice(i)); // returns deleted items
          console.log(note.length, note);
        }
      });
    }
  }
  if (new_arr.length === note.length) {
    return true;
  } else {
    return false;
  }
}

console.log(
  constructNote(
    [
      "avtq",
      "ekpvq",
      "z",
      "rdvzf",
      "m",
      "zu",
      "bof",
      "pfkzl",
      "ekpvq",
      "pfkzl",
      "bof",
      "zu",
      "ekpvq",
      "ekpvq",
      "ekpvq",
      "ekpvq",
      "z",
    ],
    [
      "m",
      "z",
      "z",
      "avtq",
      "zu",
      "bof",
      "pfkzl",
      "pfkzl",
      "pfkzl",
      "rdvzf",
      "rdvzf",
      "avtq",
      "ekpvq",
      "rdvzf",
      "avtq",
    ]
  )
);
