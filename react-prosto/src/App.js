import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
	return (
		<BrowserRouter >
			<div className="container">
				<Header />
				<Navbar />
				<Route path='/profile' render={() => <Profile data={props.state.profilePage} addPost={props.addPost} addText={props.addText} />} />
				<Route path='/dialogs' render={() => <Dialogs data={props.state.messagesPage} />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/news' render={() => <News />} />
				<Route path='/settings' render={() => <Settings />} />
			</div>
		</BrowserRouter>
	);
}

export default App;
