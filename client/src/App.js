import './index.css';
import Start from './Components/start';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Start/>
      </div>
    </BrowserRouter>
  );
}

export default App;
