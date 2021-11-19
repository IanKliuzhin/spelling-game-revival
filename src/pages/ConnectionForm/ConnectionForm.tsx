import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { MainMenuButton } from 'src/components';
import { useStore } from 'src/store';
import './style.scss';

export const ConnectionForm = observer(() => {
  const [gameId, setGameId] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  const { pageStore, connectionStore } = useStore();
  const { isConnected } = connectionStore;

  const handleSubmit = async () => {
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
        <form className="formWrapper" onSubmit={handleSubmit}>
          Веди код игры:
          <input
            value={gameId}
            onChange={(ev) => setGameId(ev.target.value)}
            placeholder="Введите код"
            className="input"
          />
          <input value="Подключиться" type="submit" className="button" />
        </form>
      )}
      <MainMenuButton />
    </div>
  );
});
