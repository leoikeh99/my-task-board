export function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export const wordCountValidator = (minWords: number, maxWords: number) => {
  return (value: string) => {
    const wordCount = value.trim().split(/\s+/).length;
    return wordCount >= minWords && wordCount <= maxWords;
  };
};
