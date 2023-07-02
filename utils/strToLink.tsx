export const strToLink = (str: string) => {
  const updatedStr = str.replace(/\s/g, '').toLowerCase();
  return `@${updatedStr}`;
};
