import { useState } from 'react';
import { useStore } from 'src/store';
import './style.scss';

export const ConnectionForm = () => {
  const [gameId, setGameId] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  const { gameStore } = useStore();

  const handleConnectClick = () => {
    setIsConnecting(true);
    gameStore.setGameId(gameId);
    // TODO логика подключения
  };

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
    </div>
  );
};
