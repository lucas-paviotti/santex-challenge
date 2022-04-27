import { useState } from 'react';

const getLocalStorage = (key: string, defaultValue: unknown) => {
  // conseguir localstorage, si tiene retornar valor
  // sino retornar initialValue
};

export default function useStateWithStorage(
  key: string,
  defaultValue: unknown
) {
  const [value, setValue] = useState(() => {
    return getLocalStorage(key, defaultValue);
  });

  // Falta grabar a localstorage

  return [value, setValue];
}
