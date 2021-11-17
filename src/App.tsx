import logo from './logo.svg';
import './App.scss';

import { MainPage } from './pages';
import { GlobalWrapper } from './components';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <GlobalWrapper>
        <MainPage />
      </GlobalWrapper>
      {/* <div className="globalWrapper">
      </div> */}
    </div>
  );
}

export default App;
