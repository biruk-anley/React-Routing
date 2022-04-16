
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Contact from './Contact';
import Null from './Null';
import { useState } from 'react/cjs/react.development';

function App() {
  {/* Aleter the boolean as true and false to checkout conditional rendering */}
  const[cardisempty]=useState(true)
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/contact/*" element={<Contact />} />   {/*  Nested route :: */}
            <Route path="/redirect" element={<Navigate to="/create" />} />

            {/* this is to chckout condtional rendering */}
            <Route
              path='/check'
              element ={cardisempty? <Navigate to= "/contact"/>:<Null/>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
