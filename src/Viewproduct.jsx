import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "./component/Menu";

const Viewproduct = () => {
  let { id } = useParams();
  let [data, SetData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let response = await fetch("https://dummyjson.com/products/" + id);
        let json = await response.json();
        // console.log(json);
        SetData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }); // Empty dependency array to run only once
  return (
    <>
      <Menu />
      <div className="col-4 p-2">
        <div className="card">
          <div className="card-header">
            <p>Proudct Id:{data.id}</p>
          </div>
          <div className="card-body">
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewproduct;
