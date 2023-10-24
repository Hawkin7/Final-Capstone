import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Register from './components/Register';
import EventPage from './components/EventPage';
import Admin from './components/Admin';
import AdminEvents from './components/AdminEvents';
import AdminUsers from './components/AdminUsers';


//Main page for the routes of the site
function App() {
	return (
		<Routes>
			<Route path="login" element={<Login />} />
			<Route path="/" element={<Register />} />
			<Route path="events" element={<EventPage />} />
			<Route path="admin" element={<Admin />} />
			<Route path="adminevents" element={<AdminEvents />} />
			<Route path="adminusers" element={<AdminUsers />} />

		</Routes>
	);
}

export default App;