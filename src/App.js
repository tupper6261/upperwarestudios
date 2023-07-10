import { Switch, Route } from 'react-router-dom';
import UpperwareLandingPage from './UpperwareLandingPage';
import SkylabLandingPage from './SkylabLandingPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={UpperwareLandingPage} />
        <Route exact path="/skylab" component={SkylabLandingPage} />
        {/* Add more routes for other pages */}
      </Switch>
    </div>
  );
}

export default App;
