
const Test = () => {
 
  const statusBtn =(status)=>{
    if(status ){
      return <button className="btn btn-success">Active</button>
  }else{
    return <button className="btn btn-success">Deactive</button>
  }
}
  return (
    <>
      {statusBtn(true)}
    </>
  );
};

export default Test;