import ReactDOM from 'react-dom';
import { App } from './App';
import { ContextStore, createStore } from './store';
import 'firebase/database';
import 'webrtc-adapter';
import './index.scss';

const runApp = () => {
  const store = createStore();
  window.DEBUG_STORE = store;

  ReactDOM.render(
    <ContextStore.Provider value={store}>
      <App />
    </ContextStore.Provider>,
    document.getElementById('root'),
  );
};

runApp();
