import '../../App.css';
import { useState, useRef } from "react";
import axios from 'axios';



export const DeleteFlight = () => {

    const flightNumberRef = useRef();  

    const [flight, setFlights] = useState([]);

const deleteFlight = async (params) => {

    let getFlightNumber = flightNumberRef.current.value;
    console.log(getFlightNumber);
    try{ 
        if(getFlightNumber !== "")
        {
            console.log(getFlightNumber);
            console.log(flightNumberRef);
            await axios.delete(`http://localhost:3131/flights/${flightNumberRef.current.value}`);
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
            <form onSubmit= {(event) => { event.preventDefault(); deleteFlight({flightNumber : flightNumberRef.current.value})}}>
                <div>
                <label htmlFor="flightNumber" >Delete Flight Number:</label>
                    <input id="flightNumber" type="search" placeholder="Flight Number" ref={flightNumberRef} />
                </div>
                <div>
                    <input type="submit" value="Delete A Flight" />
                </div>    
            </form>
        </div>
        <div>

        </div>
</>
                                )};