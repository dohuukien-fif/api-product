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
import Headers from './component/Header/index';
import { useSnackbar } from 'notistack';
import ProducFeatures from 'features/product';
import CartFeture from 'features/cart';

function App() {
  const { enqueueSnackbar } = useSnackbar();
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
      <Headers />

      <Switch>
        <Route exact path="/" component={Counter} />
        <Route path="/todo" component={Todofeatures} />
        <Route path="/abum" component={AlbumFeature} />
        <Route path="/products" component={ProducFeatures} />
        <Route path="/cart" component={CartFeture} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
