import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	//Post request when loggin in users, data is compared in the backend
  	const handleLogin = async (e) => {
		e.preventDefault();
		const response = await fetch(`/users/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
		});
		const data = await response.json();

		if (response.ok) {
			
			console.log(data);
			// Store the JWT in the localStorage
			localStorage.setItem('userToken', JSON.stringify(data.token)); 
			navigate("/events");
		}
			
		if (!response.ok) {
			alert(`Log in failed: ${data.error}`)
		}
	};
	
	return (
		<div className='sign-container text-center'>
			<form onSubmit={handleLogin}>
				<h3 className="mb-4">Sign In</h3>

				<div className="form-group my-2">
					<label className="sign-label">Email:</label>
					<input type="email" className="form-control" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
				</div>

				<div className="form-group my-2">
					<label className="sign-label">Password:</label>
					<input type="password" className="form-control" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
				</div>
				
				<button href='/events' disabled={!validateForm()} type="submit" className="btn btn-primary btn-block my-2">Log In</button><br/>				
			</form>
		</div>
	);
}

export default Login;
