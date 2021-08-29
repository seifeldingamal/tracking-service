import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import DeliveryService from './components/DeliveryService/DeliveryService';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Header />
          <div className='content'>
            <Switch>
              <Route path='/' exact component={DeliveryService} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
