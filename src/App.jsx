import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reducer from "./store/reducers";
import NavbarComponent from "./components/navBar";
import NewRecord from "./components/newRecord";
import Dashboard from "./components/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavbarComponent />
          <div className="container-wrapper">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/new_record" component={NewRecord} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

const app = document.getElementById("root");
ReactDOM.render(<App />, app);
