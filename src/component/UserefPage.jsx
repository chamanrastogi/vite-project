import Menu from "./Menu";
import { useRef } from "react";

const UserefPage = () => {  
  let x = useRef(null); 
  let result = useRef(null);   
  const change = () => {
    // create a reference 
    //move_id.current.className = "text-danger"; // assign a value to the reference    
    result.current.innerHTML = `<h3 class="badge bg-secondary">${x.current.innerText}</h3>`;    
   
  }
  return (
    <>
      <Menu />
      <div ref={result}>-</div>
      <h2 ref={x}>15</h2>
      <button onClick={change}>Click me</button>
    </>
  );
};

export default UserefPage;
