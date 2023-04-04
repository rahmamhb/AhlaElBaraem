import { Route , BrowserRouter as Router , Routes } from "react-router-dom";
import Annonces from "./Annonces";
import Programme from "./Programme";
import Gallery from "./Gallery";
import Home from "./Home"
import Nourrice from "./Nourrice";
import Parent from './Parent';
import Orthophonist from "./Orthophonist";
import Psychologue from "./Psychologue";
import NavBar1 from "./NavBar1";

const App = () => {
    return ( 
        <Router>
        <div className="App">
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>{/*to avoid Router matching*/}
                    <Route path="/Gallery" element={<Gallery />}></Route>
                    <Route path="/Annonces" element={<Annonces />}></Route>
                    <Route path="/Programmes" element={<Programme />}></Route>
                    <Route path="/Nourrice" element={<Nourrice />}></Route>
                    <Route path="/Parent" element={<Parent />}></Route>
                    <Route path="/Orthophonist" element={<Orthophonist></Orthophonist>}></Route>
                    <Route path="/Psychologue" element={<Psychologue></Psychologue>}></Route>
                    <Route path="/nav"l element={<NavBar1></NavBar1>}></Route>

                </Routes>   
            </div>
        </div>
        </Router>
          
     );
}
 
export default App;