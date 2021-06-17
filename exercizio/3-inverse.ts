export function inverseOfString(text: string): string | null {
  // return inverseOfStringByMethods(text);
  return inverseOfStringByRecursion(text);
  // return inverseOfStringByAlgorithm(text);
}

function inverseOfStringByMethods(text: string): string | null {
  if (text == "") throw new Error("A string is expected");
  // const splittedText = text.split("");
  // const reversedText = splittedText.reverse();
  // const joinedText = reversedText.join("");
  return text.split("").reverse().join("");
  // return joinedText;
}

function inverseOfStringByAlgorithm(text: string): string {
  let reversedText: string = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }
  return reversedText;
}

function inverseOfStringByRecursion(text: string): string {
  return text == ""
    ? ""
    : lastOf(text) + inverseOfStringByRecursion(text.slice(0, -1));
}

function lastOf(text: string): string {
  const lastIndex = text.length - 1;
  return text[lastIndex];
}
