// components/Admin.js
import { useNavigate, Link } from "react-router-dom";
import jwt_decode from 'jwt-decode';


function Admin() {
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
    return (
        <div className="admin-page">
            <h1 className="text-center my-2" >Admin Page</h1>
            <div class="radio-inputs text-center">
                <label className="radio">
                    <input type="radio" name="radio" checked=""/>
                    <Link className="links" to="/adminevents">Events</Link>
                </label>

                <label className="radio">
                    <input type="radio" name="radio"/>
                    <Link className="links"  to="/events">Home</Link>
                </label>
                    
                <label className="radio">
                    <input type="radio" name="radio"/>
                    <Link className="links"  to="/adminusers">Users </Link>
                </label>
            </div>
        </div>
    );
}

export default Admin;
