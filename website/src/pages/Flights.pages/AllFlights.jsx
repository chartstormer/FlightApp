import './AllFlights.css';
import '../../components/FlightList/FlightList.css'
import '../../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FlightList } from '../../components/FlightList/FlightList';

export const AllFlights = () => {

const [flight, setFlights] = useState([]);      

    useEffect(() => {
        const res = axios.get('http://localhost:3131/flights')
        setFlights(res.data);
    }, []);

    return(
            <>
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Get All Flights</title>
        </div>
            <h1>All of our Flights</h1>
                <table>
                    <thead>
                        <tr>
                            <th> Flight Number</th>
                            <th> Current Passengers</th>
                            <th> Max Passengers</th>
                            <th> Departure Date</th>
                            <th> Departure Time</th>
                            <th> Departure Airport</th>
                            <th> Arrival Date</th>
                            <th> Arrival Time</th>
                            <th> Arrival Airport</th>
                        </tr>
                    </thead>
            </table>
            <FlightList />
            
    </>
);    
    }
