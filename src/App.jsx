import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Useref from "./component/UserefPage";
import TestForm from "./TestForm";


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
      <Route path='/*' element={<NotFoundPage/>} />
    </Routes>
    </BrowserRouter>
   
    </>
  );
};

export default App;
