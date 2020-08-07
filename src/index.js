import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux' // storeを作成するパッケージ
import { Provider } from 'react-redux' // 作成したstoreを全コンポーネントに渡すproviderのパッケージ
import thunk from 'redux-thunk'

import './index.css';
import reducer from './reducers'

import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
