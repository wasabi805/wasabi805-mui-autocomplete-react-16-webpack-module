import React from 'react';
import AutoCompleteSearchPresenter from './components/AutoSearch';
import { Provider } from 'react-redux'
import { store } from './store';

const AutoCompleteSearchContainer = () => {
 
  return (
    <div>
      <Provider store={store}>
        <AutoCompleteSearchPresenter/>
      </Provider>
    </div>
  );
};
 
export { AutoCompleteSearchContainer };