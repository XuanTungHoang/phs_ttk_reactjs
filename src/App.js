import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Listbook from "./components/Listbook/Listbook";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Menu />
        <Switch>
          <Route path="/listbook" component={Listbook} />
          <Route path="/" exact component={Content} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
