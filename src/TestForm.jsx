import { useRef } from "react";
import Menu from "./component/Menu";
const TestForm = () => {
  let result = useRef(null);

  const PostForm = (e) => {
    e.preventDefault();
    let x = parseInt(e.target[0].value);
    let y = parseInt(e.target[1].value);
    let action = e.target[2].value;
    let output;
    switch (action) {
      case "+":
        output = x + y;
        break;
      case "-":
        output = x - y;
        break;
      case "*":
        output = x * y;
        break;
      case "/":
        output = y !== 0 ? x / y : "Cannot divide by zero"; // Handle division by zero
        break;
      default:
        output = "Invalid Operation";
    }
    result.current.innerHTML = `Result: ${output}`;
  };
  return (
    <>
      <Menu />
      <div className="row py-5">
        <div className="col-6 offset-3 border border-2 border-dark rounded-2 shadow-sm p-4">
            <h2 className="text-center border-bottom border-danger border-2">Multi function form</h2>
          <form onSubmit={PostForm}>
            <div className="form-group py-2">
              <label className="form-label">X:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter x value"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Y:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter y value"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Choose:</label>
              <select className="form-select">
                <option selected>Open this select menu</option>
                <option value="+">Plus</option>
                <option value="-">Minus</option>
                <option value="*">Multiply</option>
                <option value="/">Divide</option>
              </select>
            </div>
            <button className="btn btn-success btn-sm mt-3"><i className="fa fa-arrow-left px-2"></i>Submit</button>
          </form>

          <p className="mt-3">
           <span ref={result}></span>
          </p>
        </div>
      </div>
    </>
  );
};

export default TestForm;
