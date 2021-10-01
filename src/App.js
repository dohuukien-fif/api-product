import { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import Todofeatures from './features/todo';
import AlbumFeature from './features/Abum';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import NotFound from './component/NotFound/index';
import Categories from './api/categoriesApi';
import productApi from './api/productApi';
import Counter from './features/couter/index';
function App() {
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const params = { _limit: 10 };
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (error) {}
    };
    fetchApi();
  }, []);
  return (
    <div className="App">
      dsadasda
      <Link to="/todo">Todo</Link>
      <Link to="/bum">Abum</Link>
      <Switch>
        <Route exact path="/todo" component={Todofeatures} />
        <Route path="/abum" component={AlbumFeature} />
        <Route path="/couter" component={Counter} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
