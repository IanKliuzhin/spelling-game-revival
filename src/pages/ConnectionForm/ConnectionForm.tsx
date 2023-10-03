import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { ExitButton } from 'src/components';
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
        'Connecting...'
      ) : (
        <form className="formWrapper" onSubmit={handleSubmit}>
          Enter game code:
          <input
            value={gameId}
            onChange={(ev) => setGameId(ev.target.value)}
            placeholder="Enter the code"
            className="input"
          />
          <input value="Connect" type="submit" className="button" />
        </form>
      )}
      <ExitButton />
    </div>
  );
});
