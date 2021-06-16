export function isVowel(char: string): boolean {
  if (char.length !== 1) {
    throw new Error("A string was provided, a character was expected.");
  }

  return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}
