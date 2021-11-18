import { useEffect, useState } from 'react';
import './style.scss';

const SECONDS_AMOUNT = 3;

export const Countdown = ({ callback }: { callback: () => void }) => {
  const [secondsLeft, setSecondsLeft] = useState(SECONDS_AMOUNT);

  useEffect(() => {
    if (secondsLeft === 0) {
      callback();
    } else {
      window.setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
    }
  }, [secondsLeft]);

  return <div className="countdown">{secondsLeft}</div>;
};
