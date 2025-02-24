import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
  
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/*' element={<NotFoundPage/>} />
    </Routes>
    </BrowserRouter>
   
    </>
  );
};

export default App;
