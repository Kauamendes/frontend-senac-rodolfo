import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PaginaInicial from "./Pages/PaginaInicial";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
      </Routes>
    </Router>
  );
};

export default App;