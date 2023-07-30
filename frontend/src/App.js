import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Forgot from "./Components/Forgot";
import SignUp from "./Components/SignUp";
import Destination from "./Components/Destination";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/login/forgot" element = {<Forgot/>} />
        <Route path="/login/signup" element = {<SignUp/>} />
        <Route path="/:id" element = {<Destination/>} />
      </Routes>
    </Router>
  );
}

export default App;
