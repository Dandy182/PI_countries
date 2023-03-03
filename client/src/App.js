import './index.css';
import Start from '../src/Components/landingPage';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Start text={'titulo_inicial'}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
