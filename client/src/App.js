import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
