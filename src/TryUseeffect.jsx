import { useEffect, useState } from "react";
import Menu from "./component/Menu";

const TryUseeffect = () => {
  let [data, SetData] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => SetData(json.products));
  }, []);
  return (
    <>
      <Menu />
      <div className="row">
        {data &&
          data.map((item, i) => (
            <div className="col-4 p-2" key={i}>
              <div className="card">
                <div className="card-header">
                  <div className="card-body">
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TryUseeffect;
