function isPangram(string) {
  let map = {};
  // Regex to check that char is a letter
  const letters = /^[A-Za-z]+$/;
  for (const char of string) {
    if (char.match(letters) && !map[char]) {
      map[char.toLowerCase()] = char;
    }
  }

  // check how many object keys we end up with. If less than 26, return false.
  if (Object.keys(map).length === 26) {
    return true;
  } else {
    return false;
  }
}

const string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string));
const string2 = "This is not a pangram.";
console.log(isPangram(string2));
