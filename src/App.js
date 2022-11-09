
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Gallery } from "./Components/Gallery";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Services from "./Components/Services";
import SocialLinks from "./Components/SocialLinks";


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <About/>
    <Gallery/>
    {/* <Services/> */}
    <Contact/>
    <SocialLinks/>
    </div>
  );
}

export default App;
