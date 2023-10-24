import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		//Send a POST request to the server, details are encrypted and stored
		const response = await fetch("users/register", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({ email, password }),
		});
		const data = await response.json();

		if (response.ok) {
			console.log(data);
			//Store the JWT in the localStorage
			localStorage.setItem('userToken', JSON.stringify(data)); 
			navigate("/login");
		}
			
		if (!response.ok) {
			alert(`Registration failed: ${data.error}`)
		}
	}

	return (
		<div className='sign-page text-center'>
			<form className="sign-container" onSubmit={handleSubmit}>
				<h3 className="mb-4">Create an account</h3>

				<div className="form-group my-2">
					<label className="sign-label">Email</label>
					<input type="email" className="form-control" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
				</div>

				<div className="form-group my-2">
					<label className="sign-label">Password</label>
					<input type="password" className="form-control" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
				</div>

				<button type="submit" className="btn btn-primary btn-block mx-auto sign-button my-2">Register</button>
				<a href="/login" className="alert">I already have an account</a>
			</form>
		</div>
	);
};

export default Register;
