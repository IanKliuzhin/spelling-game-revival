import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Button, ExitButton } from 'src/components';
import { useStore } from 'src/store';
import './style.scss';

export const ConnectionForm = observer(() => {
  const [gameId, setGameId] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  const { pageStore, connectionStore } = useStore();
  const { isConnected } = connectionStore;

  const handleConnectClick = async () => {
    setIsConnecting(true);
    await connectionStore.startClientSession(gameId);
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
          Веди код игры:
          <input value={gameId} onChange={(ev) => setGameId(ev.target.value)} />
          <Button
            handleClick={() => handleConnectClick()}
            text="Подключиться"
          />
        </div>
      )}
      <ExitButton />
    </div>
  );
});
