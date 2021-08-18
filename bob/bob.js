export const hey = (message) => {
  message = message.trim();
  const hasLetters = /[^\W\d_]+/g;

  if (message === "") {
    return "Fine. Be that way!"
  } else if (isUpper(message) &&
    hasLetters.test(message) &&
    !isQuestion(message)) {
    return "Whoa, chill out!";
  } else if (isUpper(message) &&
    isQuestion(message) &&
    hasLetters.test(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (isQuestion(message)) {
    return "Sure.";
  } else {
    return "Whatever."
  }
};

/** helpers */
const isQuestion = (message) => {
  return message.slice(-1) === "?";
}

const isUpper = (message) => {
  return message === message.toUpperCase();
}
