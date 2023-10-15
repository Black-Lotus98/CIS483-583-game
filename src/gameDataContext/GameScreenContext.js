import { useState, useEffect } from 'react';

const CurrentScreenState = (key, initialState) => {
  const [state, setState] = useState(() => {
    try {
      const localData = localStorage.getItem(key);

      // This will only proceed if localData is not null
      return localData ? JSON.parse(localData) : initialState;
    } catch (error) {
      console.error(`Error parsing local storage for key "${key}":`, error);
      // If an error occurs, fall back to the initial state
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default CurrentScreenState;
