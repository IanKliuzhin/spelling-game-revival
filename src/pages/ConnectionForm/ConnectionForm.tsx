import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { MainMenuButton } from 'src/components';
import { useStore } from 'src/store';
import './style.scss';

export const ConnectionForm = observer(() => {
  const [gameId, setGameId] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  const { gameStore, pageStore } = useStore();
  const { isConnected } = gameStore;

  const handleConnectClick = () => {
    setIsConnecting(true);
    gameStore.setGameId(gameId);
    // TODO заменить на реальную логику подключения
    window.setTimeout(() => {
      gameStore.setIsConnected(true);
    }, 500);
  };

  useEffect(() => {
    if (isConnected) {
      pageStore.changePage('battleInfo');
    }
  }, [isConnected]);

  return (
    <div className="connectionForm">
      {isConnecting ? (
        'Подключение...'
      ) : (
        <div className="formWrapper">
          <input value={gameId} onChange={(ev) => setGameId(ev.target.value)} />
          <div className="button" onClick={() => handleConnectClick()}>
            Подключиться
          </div>
        </div>
      )}
      <MainMenuButton />
    </div>
  );
});
