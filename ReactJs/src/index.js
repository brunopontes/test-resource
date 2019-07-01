import './middlewares/polyfill';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import registerServiceWorker from './middlewares/registerServiceWorker';
import createStore from './store/store';
import { DefaultLayout } from './containers';
import Page404 from './views/pages/page404';
import Page500 from './views/pages/page500';
import PrivateRoute from './views/utils/privateRoute';

import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore(window.__INITIAL_STATE__);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ToastContainer autoClose={8000} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <PrivateRoute path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
