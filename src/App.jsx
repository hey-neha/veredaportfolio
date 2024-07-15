import "./App.css";
import Card from "./Components/Card";
import Clients from "./Components/Clients";
import Contactus from "./Components/Contactus";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
// import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Featured />
   {/*    <Portfolio /> */}
    {/* <Card/> */}
      <Clients/>
      <Contactus/>
      <Footer/>
    </>
  );
}

export default App;
