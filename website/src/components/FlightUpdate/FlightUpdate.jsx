import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './FlightForm.css';

export const FlightUpdate = () => {

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

    const handleEdit = async (event) => {
        event.preventDefault();
        try{
        await axios.put(`http://localhost:3131/flights/${flight.flightNumber}`, 
                            {   flightNumber: flightNumberRef.current.value , 
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
            console.log('Something went Wrong');
        }
    }
}