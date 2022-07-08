import axios from "axios"
import { Navigate } from "react-router";


export const deleteFlight = async (flightNumber) => {
    try {
        await axios.delete(`http://localhost:3131/flights/${flightNumber}`);
        Navigate('/', {replace :true});
    } catch(err) {
        console.log(err)
    }

    return (
        <body>
            <div className="container">
                {flight
                    .sort((a, b) => b.count_filtered - a.count_filtered)
                    .map((flight, index) => {
                        return (
                            <form className="deleteFlight" onSubmit= {(event) => { event.preventDefault(); deleteFlight(flight._id)}}>
                                <div key={flight._id}>
                                    <div><strong>Flight Number:</strong>{flight.flightNumber}</div>
                                    <div><strong>Current Passengers:</strong>{flight.currentPassengers}</div>
                                    <div><strong>Max Passengers:</strong>{flight.maxPassengers}</div>
                                    <div><strong>Departure Date:</strong>{flight.departureDate}</div>
                                    <div><strong>Departure Time:</strong>{flight.departureTime}</div>
                                    <div><strong>Departure Airport:</strong>{flight.departureAirport}</div>
                                    <div><strong>Arrival Date:</strong>{flight.arrivalDate}</div>
                                    <div><strong>Arrival Time:</strong>{flight.arrivalTime}</div>
                                    <div><strong>Arrival Airport:</strong>{flight.arrivalAirport}</div>
                                    <input type="submit" value="Delete Flight"></input>
                                </div>
                            </form>
                        )})};
            </div>
        </body>
    )
}