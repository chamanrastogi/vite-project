import { useState } from "react";
import Menu from "./component/Menu";

const TryuseStateobj = () => {
  const [myObj, setmyObj] = useState({
    key1: "raman",
    key2: "sohan",
    key3: "mohan",
  });
const change = ()=>{    
    setmyObj(prevObj =>({
        ...prevObj,
        key1: "Fire Up",
        key2 :"New value is updated"
       
    }));
}  
  return (
    <div>
      <Menu />
      
      <div className="card">
        <div className="card-header">Object Box</div>
        <div className="card-body">
          <p>{myObj.key1}</p>
          <p>{myObj.key2}</p>
          <p>{myObj.key3}</p>
        </div>
      <button className="btn btn-info me-2" onClick={change} >Change</button>
      </div>
    </div>
  );
};

export default TryuseStateobj;
