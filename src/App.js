import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import DeliveryService from './components/DeliveryService/DeliveryService';
import SearchForm from './components/SearchForm/SearchForm';
import NotFound from './components/NotFound/NotFound';
import NoPage from './components/NoPage/NoPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Header />
          <div className='content'>
            <Switch>
              <Route path='/' exact component={SearchForm} />
              <Route path='/tracking-shipment/:id' exact component={DeliveryService} />
              <Route path='/notfound' exact component={NotFound} />
              <Route component={NoPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
