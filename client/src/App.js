import './index.css';
import Start from '../src/Components/landingPage';
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
