import './CreateFlight.css';
import '../../App.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';


export const CreateFlight = () => {

    const flightNumberRef = useRef(); 
    const currentPassengersRef = useRef(); 
    const maxPassengersRef = useRef(); 
    const departureDateRef = useRef(); 
    const departureTimeRef = useRef();
    const departureAirportRef = useRef();
    const arrivalDateRef = useRef(); 
    const arrivalTimeRef = useRef(); 
    const arrivalAirportRef = useRef(); 
    const navigate = useNavigate();



    const HandleSubmit = async (event) => {
        const currPass = currentPassengersRef.current.value;
        const maxPass = maxPassengersRef.current.value;
        const passDiff = maxPass - currPass;

        let depDate = departureDateRef.current.value;
        let depTime = departureTimeRef.current.value;
        let arrDate = arrivalDateRef.current.value;
        let arrTime = arrivalTimeRef.current.value;
        

        event.preventDefault();
        if((passDiff >= 0) && ((depDate = arrDate && depTime < arrTime) || (depDate < arrDate))) {
        try{
        await axios.post('http://localhost:3131/flights', 
                            {flightNumber: flightNumberRef.current.value , 
                                currentPassengers: currentPassengersRef.current.value ,
                                maxPassengers: maxPassengersRef.current.value ,
                                departureDate: departureDateRef.current.value ,
                                departureTime: departureTimeRef.current.value,
                                departureAirport: departureAirportRef.current.value,
                                arrivalDate: arrivalDateRef.current.value,
                                arrivalTime: arrivalTimeRef.current.value,
                                arrivalAirport: arrivalAirportRef.current.value});
        navigate('../',{replace: true});
        } catch (error) {
            navigate('../', {replace:true});
            alert(error);
            console.log(error);
        }} else {
            alert("Current Passengers must be less than Maximum Passengers or the Flight must leave before it arrives. Check your inputs and please try again");
        }
    }

    return(
<>
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create New Flight</title>
    </div> 
<div className="Header" style={{ paddingTop: 55 }}>Create a New Flight</div>
    <form className="MyForm" onSubmit={HandleSubmit} >
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
                <input type="submit" value="Add Flight" />
        </h1>
    </form>
    
</>
    )
};