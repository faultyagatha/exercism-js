export const isPaired = (str) => {
  if (str.length === 0) { return true; }
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "[":
        stack.push(str[i]);
        break;
      case "]":
        if (stack.pop() !== "[") return false;
        break;
      case "{":
        stack.push(str[i]);
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
      case "(":
        stack.push(str[i]);
        break;
      case ")":
        if (stack.pop() !== "(") return false;
        break;
      default:
    }
  }
  return stack.length === 0;
};
