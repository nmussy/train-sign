import {FunctionalComponent, h} from 'preact';
import {Route, Router} from 'preact-router';
import baseroute from '../baseroute';
import Home from '../routes/home';
import NotFoundPage from '../routes/notfound';

const App: FunctionalComponent = () => {
  return (
    <div id="app">
      {/* <Header /> */}
      <Router>
        <Route path={`${baseroute}/`} component={Home} />
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
