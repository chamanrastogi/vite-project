
const Form = () => {
  const PostForm = (e) => {
    e.preventDefault();
  
    console.log(e.target[0].value);
  };

  return (
    <>
      <form onSubmit={PostForm}>
        <div className="form-group">
          
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
        <button className="btn btn-info btn-sm mt-3">Submit</button>
      </form>
    </>
  );
};

export default Form;
