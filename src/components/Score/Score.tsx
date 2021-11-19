import { useEffect, useRef, useState } from 'react';
import { useStore } from 'src/store';
import './style.scss';

const AMOUNT_CHANGE_DURATION = 500;

export const Score = ({ isRival = false }) => {
  const { gameStore } = useStore();
  const amount = isRival ? gameStore.rivalScore : gameStore.heroScore;
  const prevPrintedAmount = useRef(amount);
  const [printedAmount, setPrintedAmount] = useState(amount);
  const requestId = useRef(0);

  const runAmountChange = async () => {
    let startTimestamp = 0;
    const tick = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / AMOUNT_CHANGE_DURATION,
        1,
      );
      setPrintedAmount(
        Math.floor(
          prevPrintedAmount.current +
            progress * (amount - prevPrintedAmount.current),
        ),
      );
      if (progress < 1) {
        requestId.current = window.requestAnimationFrame(tick);
      } else {
        prevPrintedAmount.current = amount;
      }
    };
    requestId.current = window.requestAnimationFrame(tick);
  };

  useEffect(() => {
    window.cancelAnimationFrame(requestId.current);
    runAmountChange();
  }, [amount]);
  return (
    <div className="scoreWrapper">
      <div className="scoreNumber">{printedAmount}</div>
      <div className="starWrapper">
        <div className="star"></div>
      </div>
    </div>
  );
};
