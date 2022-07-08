import '../../App.css';
import { useState, useRef } from "react";
import axios from 'axios';


export const GetFlight = () => {

    const flightNumberRef = useRef(); 

    const [flight, setFlights] = useState([]);

const searchFlight = async (params) => {

    let getFlightNumber = flightNumberRef.current.value;
    try{ 
        if(getFlightNumber !== "")
        {
                const res = await axios.get(`http://localhost:3131/flights/${flightNumberRef.current.value}`)
                setFlights(res.data);
        } else {
            setFlights();
            alert(`You must enter a valid Flight number!`)
        }
    } catch(err){
        setFlights();
        alert(err.response.data.message);
    } finally {
        flightNumberRef.current.value = null;
    }
    }
return (
<>
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </div>
        <div>
            <form onSubmit= {(event) => { event.preventDefault(); searchFlight({flightNumber : flightNumberRef.current.value})}}>
                <div>
                <label htmlFor="flightNumber" >Search for Flight Number:</label>
                    <input id="flightNumber" type="search" placeholder="Flight Number" ref={flightNumberRef} />
                </div>
                <div>
                    <input type="submit" value="Search for Flight" />
                </div>    
            </form>
        </div>
        <div>
            <form>
                <div className="container">
                    <div><strong>Flight Number:</strong>{flight.flightNumber}</div>
                    <div><strong>Current Passengers:</strong>{flight.currentPassengers}</div>
                    <div><strong>Max Passengers:</strong>{flight.maxPassengers}</div>
                    <div><strong>Departure Date:</strong>{flight.departureDate}</div>
                    <div><strong>Departure Time:</strong>{flight.departureTime}</div>
                    <div><strong>Departure Airport:</strong>{flight.departureAirport}</div>
                    <div><strong>Arrival Date:</strong>{flight.arrivalDate}</div>
                    <div><strong>Arrival Time:</strong>{flight.arrivalTime}</div>
                    <div><strong>Arrival Airport:</strong>{flight.arrivalAirport}</div>
                </div>
            </form>
        </div>
</>
                                )};