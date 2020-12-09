import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
import RouteControl from './components/RouteControl';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Listbook from './components/Listbook/Listbook';

function App() {
  return (
    <div className="app"> 
      <Router>
        <Header/>
        <Menu/>
        <Switch>
            <Route path="/" extract  component={Content}/>
            <Route path="/listbook" component={Listbook}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
