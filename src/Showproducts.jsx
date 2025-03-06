import { useEffect, useState } from "react";
import Menu from "./component/Menu";
import { NavLink } from "react-router-dom";

const Showproducts = () => {
  const [data, setData] = useState([]); // Start with an empty array

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let json = await response.json();
        setData(json.products); // Ensure we're setting an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []); // Run once when the component mounts

  return (
    <div>
      <Menu />
      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.rating}</td>
                <td>
              <NavLink className="fa fa-eye" to={`/viewproduct/${item.id}`}>
               
              </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Showproducts;
