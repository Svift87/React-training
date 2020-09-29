import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
	return (
		<BrowserRouter >
			<div className="container">
				<Header />
				<Navbar />
				<Switch>
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} /> // Вопросительный знак отвечает за опциональность, может быть, а может и не быть и тогда мы получим свой профиль например
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/settings' render={() => <Settings />} />
					<Route render={() => <Settings />}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
