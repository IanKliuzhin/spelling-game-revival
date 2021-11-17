import { GlobalWrapper, PageManager } from './components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <GlobalWrapper>
        <PageManager />
      </GlobalWrapper>
    </div>
  );
}

export { App };
