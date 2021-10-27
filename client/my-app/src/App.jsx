import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { AnimatePresence } from "framer-motion";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/home" component={Home} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
