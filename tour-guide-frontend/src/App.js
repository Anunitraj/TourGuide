import logo from './logo.svg';
import './App.css';
import Topbar from './component/Topbar';
// import Testimonial from './component/Testimonial';
import Spinner from './component/Spinner';
import Navbar_hero from './component/Navbar_hero';
import About from './component/About';
import Services from './component/Services';
import Destination from './component/Destination';
import Pakage from './component/Pakage';
import Booking from './component/Booking';
import Process from './component/Process';
import Team from './component/Team';
import Footer from './component/Footer';
import Error from './component/Error';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
   <>
   
   <Topbar/>
      <Navbar_hero />
      <Routes>
        <Route path='/Spinner' Component={Spinner} />
        {/* <Route path='/topbar' Component={Topbar}/> */}
        <Route path='/pakage' Component={Pakage} />
        <Route path='/services' Component={Services} />
        <Route path='/booking' Component={Booking} />
        <Route path='/about' Component={About} />
        {/* <Route path='/testimonial' Component={Testimonial}/> */}
        {/* <Route path='/' Component={Navbar_hero }/>          home  and searchbox */}
        {/* <Route path='/Footer' Component={Footer}/> */}
        <Route path='/team' Component={Team} />
        <Route path='/process' Component={Process} />
        <Route path='/destination' Component={Destination} />
        <Route path='/*' Component={Error} />

      </Routes>
      {/* <Topbar/> */}
      {/* <Testimonial/> */}
      {/* <Spinner/> */}

      {/* <About/> */}
      {/* <Services/> */}
      {/* <Destination/> */}
      {/* <Pakage/> */}
      {/* <Booking/> */}
      {/* <Process/> */}
      {/* <Team/> */}
      <Footer />
   
   </>
  );
}

export default App;
