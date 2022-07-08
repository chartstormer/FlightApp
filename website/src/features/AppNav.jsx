import './AppNav.css';
import { Link } from 'react-router-dom';



//This will be the NavBar that users can use to get to Flights and Passenger Data to edit either

export const AppNav = () => {

    return(    
        <nav>
            <ul>
            <img src={require("../assets/FlightLogo.png")} alt="Logo" width="4%" height="4%"></img>
            <li><a href="/" className='dropdown'> Home</a></li>
                <li>
                    <div className="dropdown">
                        <button className="dropbtn">Flights</button>
                        <div className="dropdown-content">
                            <Link to="/CreateFlight"> Create a Flight</Link>
                            <Link to="/DeleteFlight"> Delete a Flight</Link>
                            <Link to="/EditFlight"> Edit a Flight</Link>
                            <Link to="/GetFlight"> Search for a Flight</Link>
                            <Link to="/allflights"> Get all Flights</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="dropdown">
                        <button className="dropbtn">Passengers</button>
                        <div className="dropdown-content">
                            <Link to="/CreatePassenger"> Create a Passenger</Link>
                            <Link to="/DeletePassenger"> Delete a Passenger</Link>
                            <Link to="/EditPassenger"> Edit a Passenger</Link>
                            <Link to="/GetPassenger"> Search for a Passenger</Link>
                            <Link to="/AllPassengers"> Get all Passengers</Link>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        
    );
}