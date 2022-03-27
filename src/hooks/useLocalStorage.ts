import {useState, useEffect} from 'react';

export function useLocalStorage(defaultValue: string, key: string) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const activeValue = window.localStorage.getItem(key);

    if (activeValue !== null) {
      setValue(JSON.parse(activeValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
