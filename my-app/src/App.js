import { Route , BrowserRouter as Router , Routes } from "react-router-dom";
import Annonces from "./Annonces";
import Programme from "./Programme";
import Gallery from "./Gallery";
import Home from "./Home"
import Nourrice from "./Nourrice";

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
                </Routes>   
            </div>
        </div>
        </Router>
          
     );
}
 
export default App;