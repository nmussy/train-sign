import {FunctionalComponent, h} from 'preact';
import {Route, Router} from 'preact-router';

import Home from '../routes/home';
import NotFoundPage from '../routes/notfound';
import Footer from './footer';

const App: FunctionalComponent = () => {
  return (
    <div id="app">
      {/* <Header /> */}
      <Router>
        <Route path="/" component={Home} />
        <NotFoundPage default />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
