import './index.css';
import Start from './Components/LandingPage';
import Home from './Components/Home';
import CardCountry from './Components/CardCountry'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/"><Start /></Route>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/home/:ID" component={<CardCountry />} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
