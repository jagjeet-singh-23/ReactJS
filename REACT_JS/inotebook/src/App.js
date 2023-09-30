import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import NoteState from './Context/notes/noteState';
import Alert from './Components/Alert';
import { useState } from 'react';
// React Router v6 sucks
// Replace Switch with Routes
// Route is a self closing component
// To use a component inside Route, use <Route path="/" element={<Home />} />
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <Router>
          <NavBar />
          <Alert alert={alert} />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} showAlert={showAlert} />
              <Route path="/signup" element={<Signup />} showAlert={showAlert} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
