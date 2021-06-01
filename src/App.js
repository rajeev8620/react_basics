import Home from "./component/home/Home";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './component/about/About';
import Dashboard from './component/dashboard/Dashboard';
import NotFoundPage from './component/notfoundpage/NotFoundPage'
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

function App() {
  return (
    <div className="App">
      <Provider template={AlertTemplate} {...options}>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
