import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Movie from "./pages/movie";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/movie/:id/:type' element={<Movie />} />
        </Routes>
    </Router>
  );
}

export default App;
