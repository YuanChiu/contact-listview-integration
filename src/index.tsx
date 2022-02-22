import * as React from "react";
import * as ReactDOM from "react-dom";
import { ContactProps, Contacts } from "./components/Contacts";
import "./styles/app.css";

(window as any).mount = (el: any, injected: ContactProps) => {
  console.log(injected);
  ReactDOM.render(
    <div className="app">
      <Contacts {...injected} />
    </div>,
    el
  );
};
