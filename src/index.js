import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import { HashRouter as Router, Route , Link} from "react-router-dom";

//import registerServiceWorker from './registerServiceWorker';
import Home from "./compoments/Home";
import User from "./compoments/User";
import Profile from "./compoments/Profile";
ReactDOM.render(
  <Router>
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/user">用户管理</Link>
                </li>
                <li>
                    <Link to="/profile">个人设置</Link>
                </li>
            </ul>
        </nav>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/profile" component={Profile} />
    </div>
  </Router>,
  document.getElementById("root")
);
//registerServiceWorker();
