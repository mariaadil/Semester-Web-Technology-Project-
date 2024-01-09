import { Routes,Route } from "react-router-dom";
import Home from "./routes/Home";
import Aboutus from "./routes/Aboutus";
import MenuRoute from "./routes/MenuRoute";
import Kabab from "./routes/kabab";
import RecipeDetailPage from "./components/chaplikebab";
import Biryani from "./routes/biryani";
import yakhnibiryani from "./components/yakhnibiryani";
import Pizzaroute from "./routes/pizzaroute";
import Pizza from "./components/pizza";
import Moltenlavaroute from "./routes/moltenlavaroute";
import Moltenlava from "./components/moltenlava";
import Bakhlavaroute from "./routes/bakhlavaroute";
import Bakhlava from "./components/bakhlava";
import Gulabjamunroute from "./routes/gulabjamunroute";
import Gulabjamun from "./components/gulabjamun";
import BruschettaRoute from "./routes/BruschettaRoute";
import Bruschetta from "./components/Bruschetta";
import CapreseSkewersRoute from "./routes/CapreseSkewersRoute"; 
import CapreseSkewers from "./components/CapreseSkewer";
import ClamDamRoute from "./routes/ClamDamRoute"; 
import ClamDam from "./components/ClamDam";
import Faq from "./routes/FAQRoute";
import Contacts from "./routes/ContactUsRoute"; 
import Term from "./routes/TermOfUseRoute";
import Copyright from "./routes/CopyRightRoutes";

function App() {

  return (
   <>
   <Routes> 
   <Route path="/home" element={<Home/>} />
    <Route path="/aboutus" element={<Aboutus/>} />
    <Route path="/" element={<MenuRoute/>} />
    <Route path="/chaplikebab" element={<Kabab/>} /> 
    <Route exact path="/chaplikebab/details" component={RecipeDetailPage} />
    <Route path="/yakhnibiryani" element={<Biryani/>} /> 
    <Route exact path="/yakhnibiryani/details" component={yakhnibiryani} />
    <Route path="/pizza" element={<Pizzaroute/>} /> 
    <Route exact path="/pizza/details" component={Pizza} />
    <Route path="/moltenlava" element={<Moltenlavaroute/>} /> 
    <Route exact path="/moltenlava/details" component={Moltenlava} />
    <Route path="/bakhlava" element={<Bakhlavaroute/>} /> 
    <Route exact path="/bakhlava/details" component={Bakhlava} />
    <Route path="/gulabjamun" element={<Gulabjamunroute/>} /> 
    <Route exact path="/gulabjamun/details" component={Gulabjamun} />
    <Route path="/bruschetta" element={<BruschettaRoute/>} /> 
    <Route exact path="/bruschetta/details" component={Bruschetta} />
    <Route path="/capreseskewers" element={<CapreseSkewersRoute/>} /> 
    <Route exact path="/capreseskewers/details" component={CapreseSkewers} />
    <Route path="/clamdam" element={<ClamDamRoute/>} /> 
    <Route exact path="/clamdam/details" component={ClamDam} />
    <Route path="/faqs" element={<Faq/>} /> 
    <Route path="/contacts" element={<Contacts/>} /> 
    <Route path="/termofuse" element={<Term/>} /> 
    <Route path="/copyright" element={<Copyright/>} /> 
   </Routes>
  
   </>
  );
}

export default App;