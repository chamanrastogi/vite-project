import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Useref from "./component/UserefPage";
import TestForm from "./TestForm";
import ApiTest from "./ApiTest";
import TryuseState from "./TryuseState";
import TryuseStateobj from "./TryuseStateobj";
import TryuseStatearr from "./TryuseStatearr";
import TryuseStateForm from "./TryuseStateForm";
import TryUseeffect from "./TryUseeffect";
import TryUseeffectwithfunction from "./TryUseeffectwithfunction";
import Showproducts from "./Showproducts";
import Viewproduct from "./Viewproduct";


const App = () => {
  
  return (
    <>    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about/:id/:name' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/useref' element={<Useref/>} />
      <Route path='/testform' element={<TestForm/>} />
      <Route path='/apitest' element={<ApiTest/>} />
      <Route path='/tryusestate' element={<TryuseState/>} />
      <Route path='/tryusestateobj' element={<TryuseStateobj/>} />
      <Route path='/tryusestatearr' element={<TryuseStatearr/>} />
      <Route path='/tryusestateform' element={<TryuseStateForm/>} />
      <Route path='/tryuseeffect' element={<TryUseeffect/>} />
      <Route path='/tryuseeffectwithfunction' element={<TryUseeffectwithfunction/>} />
      <Route path='/showproducts' element={<Showproducts/>} />
      <Route path='/viewproduct/:id' element={<Viewproduct/>} />
      <Route path='/*' element={<NotFoundPage/>} />
    </Routes>
    </BrowserRouter>
   
    </>
  );
};

export default App;
