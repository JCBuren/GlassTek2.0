import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Ag from './components/Ag';
import Quote from './components/Quote';
import Repair from './components/Repair';
import Replace from './components/Replace';
import Rv from './components/Rv';
import Semi from './components/Semi';
import Sensor from './components/Sensor';
import Train from './components/Train';


function App() {
  return (<>

<Routes>
    <Route path= "/" element={<Home/>}/>


    <Route path= "/About" element={<About/>}/>
    

    <Route path= "/Ag" element={<Ag/>}/>

    <Route path= "/Quote" element={<Quote/>}/>
    

    <Route path= "/Repair" element={<Repair/>}/>
    

    <Route exact path= "/Replace" element={<Replace/>}/>
    

    <Route path= "/Rv" element={<Rv/>}/>
  

    <Route exact path= "Semi" element={<Semi/>}/>
      

    <Route exact path= "Sensor" element={<Sensor/>}/>
    

    <Route exact path= "Train" element={<Train/>}/>
     
    </Routes>

    <Footer/>  




    </>
  );
}

export default App;
