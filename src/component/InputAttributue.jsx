import { useRef } from "react";

const InputAttributue = () => {
  let fname,
    lname = useRef(null);

  const checker = () => {
    let firstname = fname.value;
    let lastname = lname.value;
    alert(firstname + " " + lastname);
    fname.value = "";
    lname.value = "";
    fname.focus();
  };
  return (
    <div className="row">
      <input type="text" ref={(a) => (fname = a)} placeholder="First Name" />
      <input type="text" ref={(a) => (lname = a)} placeholder="last Name" />

      <button className="btn btn-info" onClick={checker}>
        Checker
      </button>
    </div>
  );
};

export default InputAttributue;
