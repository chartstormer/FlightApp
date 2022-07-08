import { AppNav } from './features/AppNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing, Error} from "./pages";
import { AllFlights, CreateFlight, EditFlight, GetFlight, DeleteFlight } from './pages/Flights.pages'
import './App.css';
import { EditPassenger, CreatePassenger, DeletePassenger, GetPassenger, AllPassengers } from './pages/Passenger.pages';

const App = () => {

  return (
    <Router>
      <AppNav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/CreateFlight" element={<CreateFlight />} />
          <Route path="/CreatePassenger" element={<CreatePassenger />} />
          <Route path="/EditFlight" element={<EditFlight />} />
          <Route path="/EditPassenger" element={<EditPassenger />} />
          <Route path="/DeleteFlight" element={<DeleteFlight />} />
          <Route path="/DeletePassenger" element={<DeletePassenger />} />
          <Route path="/GetFlight" element={<GetFlight />} />
          <Route path="/GetPassenger" element={<GetPassenger />} />
          <Route path="/AllFlights" element={<AllFlights />} />
          <Route path="/AllPassengers" element={<AllPassengers />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  );
}


export default App;
