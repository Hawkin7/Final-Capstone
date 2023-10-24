import React, { useState, useEffect } from "react";

//Form for creating new events, data is passed to the AdminEventsCard when the admin wants to update them 
const EventForm = ({onSubmit, event}) => {
	const [name, setName] = useState('');
	const [date, setDate] = useState('');
	const [location, setLocation] = useState('');
	const [image, setImage] = useState('');
	const [site, setSite] = useState('');
    
	const submit = (e) => {
		e.preventDefault();
		//Submit already structured
		onSubmit({"name": name, "date": date, "location": location, "image": image, "site": site});

		//Clear fields on submit
		setName('');
		setDate('');
		setLocation('');
		setImage('');
		setSite('');
	};
	
	//Update the data
	useEffect(() => {
		if (event) {
			setName(event.name);
			setDate(event.date);
			setLocation(event.location);
			setImage(event.image);
			setSite(event.site);
		}
	}, [event]);

	return (
		<form className="text-center event-add" onSubmit={submit}>
			<label>Title:</label><br/>
			<input className="my-2" type="text" value={name} onChange={(e) => setName(e.target.value)} required/><br/>
			<label>Date:</label><br/>
			<input className="my-2" type="text" value={date} onChange={(e) => setDate(e.target.value)} required /><br/>
			<label>Location:</label><br/>
			<input className="my-2" type="text" value={location} onChange={(e) => setLocation(e.target.value)} required /><br/>
			<label>Image:</label><br/>
			<input className="my-2" type="url" value={image} onChange={(e) => setImage(e.target.value)} required /><br/>
			<label>Site:</label><br/>
			<input className="my-2" type="url" value={site} onChange={(e) => setSite(e.target.value)} required /><br/>
			<button className="my-3" type="submit">Save</button>
		</form>
	);
};

export default EventForm;