
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About mode={mode}/>
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtils" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
