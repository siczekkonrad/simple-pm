import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';
import Home from "./routes/Home/Home.component";
import Login from './routes/Login/Login.component';
import TaskBoard from "./routes/TaskBoard/TaskBoard.component";
import Contact from "./routes/Contact/Contact.component";
import Header from "./components/Header/Header.component";

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/home' component={Home} />
            <Route path='/taskboard' component={TaskBoard}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </Router>
  );
}

export default App;
