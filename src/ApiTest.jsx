import { useRef } from "react";
import Menu from "./component/Menu";
const ApiTest = () => {
  const ApiData= useRef(null);
  const myPtag= useRef(null);
  const fetchData = async() => {

 const responce= await fetch("https://dummyjson.com/products")
        ApiData.current = await responce.json();
       //console.log(ApiData.current.products);
  };
  const showData = () => {
    const myProducts = JSON.stringify(ApiData.current.products);
    myPtag.current.innerHTML = ApiData.current.products
    .map((item,key) => `<p key=${key}><strong>ID:</strong> ${item.id} - <strong>Title:</strong> ${item.title}</p>`)
    .join(""); // Convert array to a string of HTML elements
   console.log(typeof(myProducts));
   
  };
  return (
    <>
      <Menu />
      <div className="row pt-5 text-center">
        <p ref={myPtag}> </p>
        <div className="form-group">
           
        <button className="btn btn-info me-2" onClick={fetchData}> Fetch</button>
        <button  className="btn btn-warning" onClick={showData}> Show</button>
        </div>
      </div>
    </>
  );
};

export default ApiTest;
