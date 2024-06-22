// import React from "react";
// import ReactDOM from "react-dom";
// import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
// import {RoomProvider} from './context';

// ReactDOM.render(
//   <RoomProvider>
//   <Router>
//     <App />
//   </Router>
//  </RoomProvider>,
//  document.getElementById("root")
// );

// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

 document.getElementById("root")
);
serviceWorker.unregister();