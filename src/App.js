import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UpperwareLandingPage from './UpperwareLandingPage';
import SkylabLandingPage from './skylab/SkylabLandingPage';
import Meetups from './skylab/Meetups';
import Resume from './Resume';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<UpperwareLandingPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skylab" element={<SkylabLandingPage />} />
        <Route path="/skylab/meetups" element={<Meetups />} />
        <Route path="/skylab/*" element={<SkylabLandingPage />} />
        {/* Add more routes for other pages */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
