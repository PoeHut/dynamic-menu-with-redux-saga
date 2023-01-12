import React from 'react';

import {Provider} from 'react-redux';
import {store} from './src/reduxs/store';
import Routes from './src/routes/Routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
