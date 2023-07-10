import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UpperwareLandingPage from './UpperwareLandingPage';
import SkylabLandingPage from './skylab/SkylabLandingPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={UpperwareLandingPage} />
        <Route exact path="/skylab" element={SkylabLandingPage} />
        {/* Add more routes for other pages */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
