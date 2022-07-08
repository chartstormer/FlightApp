import { useEffect, useState } from "react";
import axios from 'axios';
import '../../App.css';

export const FlightList = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3131/flights')
        .then(res => setFlights(res.data))
        .catch((err) => console.log(err));
    }, []);

    return(
    flights.map((flight, flightNumber) => {
    return (
        <body>
            <div key={flightNumber}>
                <table>
                    <tr>
                        <tr>{flight.flightNumber}</tr>
                        <td>{flight.currentPassengers}</td>
                        <td>{flight.maxPassengers}</td>
                        <td>{flight.departureDate}</td>
                        <td>{flight.departureTime}</td>
                        <td>{flight.departureAirport}</td>
                        <td>{flight.arrivalDate}</td>
                        <td>{flight.arrivalTime}</td>
                        <td>{flight.arrivalAirport}</td>
                    </tr>
                </table>
            </div>
        </body>
    )}));
}