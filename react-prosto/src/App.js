import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
	return (
		<BrowserRouter >
			<div className="container">
				<Header />
				<Navbar />
				<Route path='/profile' render={() => <Profile />} />
				<Route path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/news' render={() => <News />} />
				<Route path='/users' render={() => <UsersContainer />} />
				<Route path='/settings' render={() => <Settings />} />
			</div>
		</BrowserRouter>
	);
}

export default App;
