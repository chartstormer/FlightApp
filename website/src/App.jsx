import { AppNav } from './features/AppNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing, Error} from "./pages";
import { AllFlights, CreateFlight, EditFlight, GetFlight, DeleteFlight } from './pages/Flights.pages'
import './App.css';

const App = () => {

  return (
    <Router>
      <AppNav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/CreateFlight" element={<CreateFlight />} />
          <Route path="/EditFlight" element={<EditFlight />} />
          <Route path="/DeleteFlight" element={<DeleteFlight />} />
          <Route path="/GetFlight" element={<GetFlight />} />
          <Route path="/AllFlights" element={<AllFlights />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  );
}


export default App;
