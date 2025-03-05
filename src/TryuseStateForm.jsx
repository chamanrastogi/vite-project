import { useState } from "react";
import Menu from "./component/Menu";

const TryuseStateForm = () => {
  const [formState, setFormState] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "Male",
  });
  const sumitForm = (e) => {
    e.preventDefault();
    console.log(formState);
    setFormState({
      fName: "",
      lName: "",
      city: "",
      gender: "male",
    });
  };
  return (
    <div>
      <Menu />

      <div className="row py-5">
        <div className="col-6">
          <form onSubmit={sumitForm}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={formState.fName}
              onChange={(e) =>
                setFormState({ ...formState, fName: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={formState.lName}
              onChange={(e) =>
                setFormState({ ...formState, lName: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              value={formState.city}
              onChange={(e) =>
                setFormState({ ...formState, city: e.target.value })
              }
            >
              <option value="">Choose City</option>
              <option value="delhi">Delhi</option>
              <option value="noida">Noida</option>
            </select>
          </div>

          <div className="form-check">
            <input
              onChange={() => setFormState({ ...formState, gender: "male" })}
              value="male"
              type="radio"
              className="form-check-input"
              name="gender"
              checked={formState.gender === "male"}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              onChange={() => setFormState({ ...formState, gender: "female" })}
              type="radio"
              value="female"
              className="form-check-input"
              name="gender"
            />
            <label className="form-check-label">Female</label>
          </div>
          <button className="btn btn-success my-2" >
            Submit
          </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default TryuseStateForm;
