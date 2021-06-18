export function isPalindrome(text: string): boolean {
  const trimmed = textTrimmer(text);
  for (let i = 0; i < trimmed.length / 2; i++) {
    const oppositeIndex = trimmed.length - 1 - i;
    if (trimmed[i] !== trimmed[oppositeIndex]) return false;
  }
  return true;
}

function textTrimmer(text: string): string {
  let trimmedText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      trimmedText += text[i];
    }
  }
  return trimmedText.toLowerCase();
}
