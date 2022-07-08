import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const EditFlight = () => {

        const flightNumberRef = useRef(); 
        const currentPassengersRef = useRef(); 
        const maxPassengersRef = useRef(); 
        const departureDateRef = useRef(); 
        const departureTimeRef = useRef();
        const departureAirportRef = useRef();
        const arrivalDateRef = useRef(); 
        const arrivalTimeRef = useRef(); 
        const arrivalAirportRef = useRef();  

        const [flight, setFlights] = useState([]);

        const navigate = useNavigate();
    
        const HandleEdit = async (event) => {
            const currPass = currentPassengersRef.current.value;
            const maxPass = maxPassengersRef.current.value;
            const passDiff = maxPass - currPass;

            let depDate = departureDateRef.current.value;
            let depTime = departureTimeRef.current.value;
            let arrDate = arrivalDateRef.current.value;
            let arrTime = arrivalTimeRef.current.value;
            
            try{
            const res = await axios.put(`http://localhost:3131/flights/${flightNumberRef.current.value}`, {flightNumber: flightNumberRef.current.value , 
                                        currentPassengers: currentPassengersRef.current.value ,
                                        maxPassengers: maxPassengersRef.current.value ,
                                        departureDate: departureDateRef.current.value ,
                                        departureTime: departureTimeRef.current.value,
                                        departureAirport: departureAirportRef.current.value,
                                        arrivalDate: arrivalDateRef.current.value,
                                        arrivalTime: arrivalTimeRef.current.value,
                                        arrivalAirport: arrivalAirportRef.current.value}); 
                    setFlights(res.data);  
                    navigate('../', {replace:true});
            } catch (error) {
                setFlights();
                console.log(error);
            } finally {
                flightNumberRef.current.value = null;
            }}
        
    return(

<>
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Edit a Flight</title>
    </div> 
<div className="Header" style={{ paddingTop: 55 }}>Edit a Flight</div>
    <h1>Flight Number Required</h1>
    <form className="MyForm" onSubmit={(event) => { event.preventDefault(); HandleEdit({flightNumber : flight._id})}} >
        <div>
            <label htmlFor="flightNumber" >Flight Number:</label>
                <input id="flightNumber" type="text" placeholder="Flight Number" ref={flightNumberRef} />
        </div>
        <div>
            <label htmlFor="currentPassengers" >Current Passengers:</label>
                <input id="currentPassengers" type="number" placeholder="Current Passengers" ref={currentPassengersRef} min="0" />
        </div>    
        <div>
            <label htmlFor="maxPassengers" >Max Passengers:</label>
                <input id="maxPassengers" type="number" placeholder="Max Passengers" ref={maxPassengersRef} min="0" />
        </div>
        <div>
            <label htmlFor="departureDate" >Departure Date:</label>
                <input id="departureDate" type="date" placeholder="Departure Date" ref={departureDateRef} />
        </div>
        <div>
            <label htmlFor="departureTime" >Departure Time:</label>
                <input id="departureTime" type="time" placeholder="Departure Time" ref={departureTimeRef} />
        </div>
        <div>   
            <label htmlFor="departureAirport" >Departure Airport:</label>
                <input id="departureAirport" type="string" placeholder="Departure Airport" ref={departureAirportRef} maxLength="3" />
        </div>
        <div>
            <label htmlFor="arrivalDate" >Arrival Date:</label>
                <input id="arrivalDate" type="date" placeholder="Arrival Date" ref={arrivalDateRef} />
        </div>
        <div>
            <label htmlFor="arrivalTime" >Arrival Time:</label>
                <input id="arrivalTime" type="time" placeholder="Arrival Time" ref={arrivalTimeRef} />
        </div>
        <div>
            <label htmlFor="arrivalAirport" >Arrival Airport:</label>
                <input id="arrivalAirport" type="string" placeholder="Arrival Airport" ref={arrivalAirportRef} maxLength="3" />
        </div>
        <div>
        </div>
        <h1>
                <input type="submit" value="Edit Flight" />
        </h1>
    </form>
    
</>  );
}