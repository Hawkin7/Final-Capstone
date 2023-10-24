import React, { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const AdminUsers = () => {
	const [users, setUsers] = useState([]);

	//Routes the user back to the login page if the user has not signed in or does not have admin permissions
    const navigate = useNavigate();
    const token = localStorage.getItem('userToken');
    if (!token) {
        navigate('/login')
    }
    const decodedToken = jwt_decode(token);
    const isAdmin = decodedToken.isAdmin; 
    console.log(token);
    if (!isAdmin) {
        navigate('/login')
    }

	//Fetch all users
	useEffect(() => {
		fetch("/users")
		.then(response => response.json())
		.then(data => setUsers(data));
	}, []);

	//Delete one user
	const deleteUser = (userId) => {
		fetch(`/users/${userId}`, {
			method: 'DELETE',
		}).then(() => {
			setUsers(users.filter(user => user._id !== userId));
		});
	};

	return (
		<div className="users-page text-center p-3 ">
			<h1 className="my-3">Users Page</h1>
			<Col>
				<div className="mt-4 user-list text-center">
					
						{users.map(user => (
						<Row>
							<div key={user._id} className="user-item">
							<p className="user-email">{user.email}</p>
							<button className='delete-button' onClick={() => deleteUser(user._id)}>Delete</button>
							</div>
						</Row>	
						))}
				</div>
			</Col>
		</div>
	);
};

export default AdminUsers;

