import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "../store/index";

//inside the app component import only page component
//pages Component
import HomePage from "../pages/homePage-component/homePage.js";
import PageTwo from "../pages/PageTwo-component/PageTwo.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>hello app </p>
        <HomePage />
        <PageTwo />
      </div>
    </Provider>
  );
}

export default App;
