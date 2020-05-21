function balancedBrackets(string) {
  const opposites = {
    "{": "}",
    "[": "]",
    "(": ")",
    "|": "|",
  };

  const allBrackets = ["{", "}", "[", "]", "(", ")", "|", "|"];

  // initialize a stack as an array (FILO)
  const brackets = [];

  // loop over the characters in the string
  for (let i = 0; i < string.length; i++) {
    // check if our character is a bracket
    if (allBrackets.includes(string.charAt(i))) {
      // check if character is opening bracket by seeing if it is a key in the opposites object
      if (string.charAt(i) in opposites) {
        // if yes, add it to the stack
        brackets.push(string.charAt(i));
      }
      // otherwise it is a closing bracket, in which case we check to see if the last element in stack is the same kind by referencing our opposites object
      else {
        // If it is, then pop it off the stack and move on.
        if (opposites[brackets[brackets.length - 1]] === string.charAt(i)) {
          brackets.pop();
        } else {
          return false;
        }
      }
    }
  }
  return true;
}
