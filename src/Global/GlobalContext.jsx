import { createContext, useEffect, useState } from 'react';
import { locationsPathNames } from '../Config/config';

export const globalState = createContext(null);

function GlobalContext({ children }) {
  const [nextTopic, setNextTopic] = useState(1);
  const currentLocation = window.location.pathname;
  const [test, setTest] = useState(1);

  useEffect(() => {
    locationsPathNames.forEach((pathName) => {
      const actualPathName = pathName.split(',')[1];
      const actualPathNameNo = parseInt(pathName.split(',')[0]);
      if (actualPathName === currentLocation) {
        setNextTopic(actualPathNameNo);
      }
    });
  }, [setTest]);
  function moveToNextTopic() {
    setNextTopic(nextTopic + 1);
    console.log(locationsPathNames[nextTopic]);
  }
  return (
    <globalState.Provider value={{ setTest, test, nextTopic, moveToNextTopic }}>
      {children}
    </globalState.Provider>
  );
}

export default GlobalContext;
