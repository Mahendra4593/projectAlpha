import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Forgot from "./Components/Forgot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/signup/forgotpassword" element = {<Forgot/>} />
      </Routes>
    </Router>
  );
}

export default App;
