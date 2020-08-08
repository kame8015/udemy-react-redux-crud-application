import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux' // storeを作成するパッケージ
import { Provider } from 'react-redux' // 作成したstoreを全コンポーネントに渡すproviderのパッケージ
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';
import reducer from './reducers'

import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventsNew} />
        <Route exact path="/" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
