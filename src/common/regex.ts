export const getNextUrl = (url: string): string => {
  const match = url.match("[0-9]+")?.[0];
  return match ? match : "";
};
