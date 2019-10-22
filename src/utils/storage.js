const { stringify, parse } = JSON;

export const setStorage = (key, value, format = false) => {
  window.localStorage.setItem(key, format ? stringify(value) : value);
};

export const getStorage = (key, format = false) => {
  const value = window.localStorage.getItem(key);
  return format ? parse(window.localStorage.getItem(key)) : value;
};

export const removeStorage = key => {
  window.localStorage.removeItem(key);
};

export const clearStorage = () => window.localStorage.clear();
