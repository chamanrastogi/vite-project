import { useEffect, useState } from "react";
import Menu from "./component/Menu";

const TryUseeffectwithfunction = () => {
  let [data, SetData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let response = await fetch("https://dummyjson.com/products/1");
        let json = await response.json();
       // console.log(json);
        SetData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }); // Empty dependency array to run only once
  return (
    <div>
      <Menu />

      <div className="col-4 p-2">
        <div className="card">
          <div className="card-header">
            <div className="card-body">
              <p>{data.title}</p>
              <p>{data.description}</p>
              <p>{data.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryUseeffectwithfunction;
