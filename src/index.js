import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux' // storeを作成するパッケージ
import { Provider } from 'react-redux' // 作成したstoreを全コンポーネントに渡すproviderのパッケージ

import './index.css';
import reducer from './reducers'

import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
