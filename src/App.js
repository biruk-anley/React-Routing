
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/redirect" element={<Navigate to="/create" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
