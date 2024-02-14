import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Complain from './Components/Complain';
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom';
import Animated from './Components/Animated';
import Workers from './Components/Workers';
import Showdata from './Components/Showdata';
import Office  from './Components/Office';
import Error from './Components/Error';
import Results from './Components/Results';
import Login from './Components/Login';
import About from './Components/About';
import Contact from './Components/Contact';
import Enlargeddata from './Components/Enlargeddata';

function App() {
  return (
    <Router>
    <>
        <Navbar/>   
        {/* <Enlargeddata/> */}
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/Complain' Component={Complain}/>
          <Route path='/Office' Component={Office}/>
          <Route path='/About' Component={About}/>
          <Route path='/Workers' Component={Workers}/>
          <Route path='/Contact' Component={Contact}/>
          <Route path='/Login' Component={Login}/>
          <Route path='/Results' Component={Results}/>
          <Route path='//enlarge image=  location= city= department Pending=' Component={Enlargeddata}/>
          <Route path='*' Component={Error}/>
        </Routes>
    </>
    </Router>
  );
}

export default App;
