import React from "react";
import ReactDOM from "react-dom";
import "./Resources/Lib/Normalize/normalize.css";
import './Styles/main.scss';
import { Home, DetailSection } from "./Containers";
import { UIcontextProvider } from './Store/UiContext';

const App = () => {

  return (
    <UIcontextProvider>
      <DetailSection />
    </UIcontextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

