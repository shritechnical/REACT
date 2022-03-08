import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './components/pages/Notfount';
import './index.css';
import Footer from './components/layouts/Footer';
import AddUser from './components/pages/AddUsers'
import Frontview from './Frontview';
import RestaurantCreate from './components/restaurant/RestaurantCreate';
import RestaurantList from './components/restaurant/RestaurantList';
import UserDocument from './components/UserDocuments';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      
      <Switch>
        {/* for all pages common */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/AddUsers/Add" component={AddUser} />
        <Route exact path="/Frontview/Show" component={Frontview} />
        <Route exact path="/Restaurant/Add" component={RestaurantCreate} />
        <Route exact path="/Restaurant/List" component={RestaurantList} />
        <Route exact path="/uploaddocument" component={UserDocument} />
        
        <Route component={Notfound} />
      </Switch>
    
     <Footer />  {/* using page include  */}
      </Router>
     
    </div>
  );
}

export default App;
