import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home   from './Pages/Home';
import Music from './Pages/Music';
import Videos from './Pages/Videos';
import Photos from './Pages/Photos';
import Bio from './Pages/Bio';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <div>
			<Router basename="/">
				<Navbar />
				<main>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/music">
							<Music />
						</Route>
						<Route exact path="/videos">
							<Videos />
						</Route>
						<Route exact path="/photos">
							<Photos />
						</Route>
						<Route exact path="/bio">
							<Bio />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
					</Switch>
				</main>
				<Footer />
			</Router>
    </div>
  );
}

export default App;
