// import logo from './logo.svg';



import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import Firstpage from './Component/Firstpage';
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
// import Footer from "./Component/Footer";
// import SignUp from "./Component/SignUp";
// import Newsstyle from './Component/Newsstyle';
// import { Hockey } from './Component/Hockey';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";

function App() {
  return (
  
     
    <div>
       <Router>
    <Navbar></Navbar>
          <Switch>
         

          <Route exact path="/sports"><News key="sports" category ="sports"/></Route>

          <Route exact path="/business"><News key="business" category="business"/></Route>

          <Route exact path="/entertainment"><News key="entertainment" category="entertainment"/></Route>

          <Route exact path="/general"><News key="general" category="general"/></Route>

          <Route exact path="/health"><News key="health" category="health"/></Route>

          <Route exact path="/science"><News key="science" category="science"/></Route>

          <Route exact path="/technology"><News key="technology" category ="technology"/></Route>
        

        

        </Switch>
      
   
        <Route exact path="/"><SignUp/></Route>
        <Route exact path="/login"><Login/></Route>
  
      
    </Router>    </div>
 


   
      
   
  

  

  );
}

export default App;
