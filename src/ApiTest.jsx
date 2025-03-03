import { useRef } from "react";
import Menu from "./component/Menu";
const ApiTest = () => {
  const ApiData= useRef(null);
  const myPtag= useRef(null);
  const total= useRef(null);
  
  const fetchData = async() => {

 const responce= await fetch("https://dummyjson.com/products")
        ApiData.current = await responce.json();
       //console.log(ApiData.current.products);
  };
  const showData = () => {
   //const myProducts = JSON.stringify(ApiData.current.products);
    myPtag.current.innerHTML = ApiData.current.products
    .map((item,key) => `<tr><td key=${key}> ${item.id} </td><td>  ${item.title}</td></tr>`)
    .join(""); // Convert array to a string of HTML elements
    total.current.innerText =  ApiData.current.products.length;
  // console.log(myProducts);
   
  };
  return (
    <>
      <Menu />
      <div className="row pt-5">
        <div
          className="table-responsive"
        >
          <p className="fw-bold me-2">Total:<span className="fw-normal" ref={total}></span></p>
          <table
            className="table table-bordered"
          >
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                
              </tr>
            </thead>
            <tbody ref={myPtag}>
         
            </tbody>
          </table>
        </div>
        
       
        <div className="form-group">
           
        <button className="btn btn-info me-2" onClick={fetchData}> Fetch</button>
        <button  className="btn btn-warning" onClick={showData}> Show</button>
        </div>
      </div>
    </>
  );
};

export default ApiTest;
