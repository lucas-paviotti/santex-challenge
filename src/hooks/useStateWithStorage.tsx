import { useState, useEffect } from 'react';

const getLocalStorage = (key: string, defaultValue: unknown) => {
  const localStorageContent = localStorage.getItem(key);

  if (localStorageContent) {
    return JSON.parse(localStorageContent);
  } else {
    return defaultValue;
  }
};

export default function useStateWithStorage(
  key: string,
  defaultValue: unknown
) {
  const [value, setValue] = useState(() => {
    return getLocalStorage(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
