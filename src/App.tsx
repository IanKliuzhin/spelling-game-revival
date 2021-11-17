import { MainPage } from './pages';
import { GlobalWrapper } from './components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <GlobalWrapper>
        <MainPage />
      </GlobalWrapper>
    </div>
  );
}

export { App };
