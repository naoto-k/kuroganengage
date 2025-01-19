export const setItemToLocalStorage = <T = unknown>(
  key: string,
  value: T
): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
