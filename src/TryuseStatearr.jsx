import { useState } from "react";
import Menu from "./component/Menu";
const TryuseStatearr = () => {
  const [list, Setlist] = useState([]);
  const [item, Setitem] = useState("");
  const ClearToList = () => {
    Setlist([]);
   
  };
  const AddToList = () => {
   // Setlist((prevList) => [...prevList, item]);
   list.push(item);
   Setitem([...item]);
    Setitem(""); // Reset input field after adding
  };
  const removeItem = (index) => {
   // Setlist((prevList) => prevList.filter((_, i) => i !== index));
   list.splice(index,1);
   Setitem([...item]);
  };
  
  return (
    <div>
      <Menu />
      <div className="row">
        <div className="col-6 offset-3 py-2">
        
          <h5 className="text-center py-3">Add Todo Item</h5>
          <div className="form-group">
            <input
              type="text"
              className="form-control py-2"
              value={item}
              onChange={(e) => Setitem(e.target.value)}
              placeholder="Item"
            />
            <button className="btn btn-info mt-3 me-2" onClick={AddToList}>
              Add
            </button>
            <button className="btn btn-danger mt-3" onClick={ClearToList}>
              Clear
            </button>
            
          </div>
          <div className={list.length>0 ?'':'d-none'}>
          <h5 className="text-center py-3">To List</h5>
          <ul className="list-group">
            {list.map((item, i) => {
              return (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={i}>
                  {item} <i className="fa fa-remove" onClick={()=>{removeItem(i)}} aria-hidden="true"></i>
                </li>
              );
            })}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TryuseStatearr;
