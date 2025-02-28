import Menu from "./Menu";
import { useRef } from "react";
import "animate.css";
import Password from "./Password";
import ImageChanger from './ImageChanger';
import InputAttributue from './InputAttributue';
import Changecss from "./Changecss";

const UserefPage = () => {
  let x = useRef(null);
  let result = useRef(null);
  
  const change = () => {
    if(result.current)
    {
    // create a reference
    //move_id.current.className = "text-danger"; // assign a value to the reference
    result.current.innerHTML = `<h3 class="badge bg-secondary">${x.current.innerText}</h3>`;
    }
    
  };
  const vals = true;
  
  return (
    <>
      <Menu />
      <div className="row"><p className={`text-center pt-5 ${vals ? 'text-success' : 'text-danger'}`}>This is a test</p></div>
      <div ref={result}>-</div>
      <h2 ref={x}>15</h2>

      <button onClick={change}>Click me</button>
      <div className="row">
        <div className="col-6 offset-3 border border-2 border-dark rounded-2 shadow-sm p-4">
          <ImageChanger />
          <div className="form-group py-2">
            <Password/>
          </div>
          <InputAttributue/>
          <Changecss text="This is a sample text"/>

          
        </div>
      </div>
      
    </>
  );
};

export default UserefPage;
