import "./App.css";
import "./index.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/login"> Login</Link>
          <Link to="/registration"> Registration</Link>
          
        </div>
        <Switch>
          {/* <Route path="/registration" exact component={Registration} /> */}
          <Route path="/login" exact component={Login} />
          {/* <Route path="/" exact component={Registration} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
