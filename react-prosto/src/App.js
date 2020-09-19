import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'

const App = () => {
	return (
		<div className="container">
			<Header/>
			<Navbar />
			{/* <Profile /> */}
			<Dialogs />
		</div>
=======
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = () => {
	return (
		<BrowserRouter >
			<div className="container">
				<Header/>
				<Navbar />
				<Route path='/profile' component={Profile} />
				<Route path='/dialogs' component={Dialogs} />
				<Route path='/music' component={Music} />
				<Route path='/news' component={News} />
				<Route path='/settings' component={Settings} />
			</div>
		</BrowserRouter>
>>>>>>> 7eaf31ef943d4b831d1aa7c3c4d1a66ad5142d14
	);
}

export default App;
