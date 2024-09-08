import React from "react";
import { SmartSearchBar } from "./components/SmartSearchBar";
import { Provider } from "react-redux";
import { store } from "./store";

const SmartSearchBarContainer = () => {
  return (
    <div>
      <Provider store={store}>
        <SmartSearchBar />
      </Provider>
    </div>
  );
};

export { SmartSearchBarContainer};
