export const getItemFromLocalStorage = <T = unknown>(key: string): T => {
  const item = localStorage.getItem(key);

  return item ? JSON.parse(item) : null;
};
