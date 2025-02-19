const Card = (props) => {
  return (
    <div className="card"  >
      <div className="card-header">{props.heading}</div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.body}
        </p>
       
      </div>
    </div>
  );
};

export default Card;
