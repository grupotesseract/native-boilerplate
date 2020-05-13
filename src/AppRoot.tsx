import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';
import AppTheme from './AppTheme';

const store = createStore(rootReducer)

export default () => {
    return <>
      <Provider store={store}>
        <AppTheme />
      </Provider>
    </>
};
