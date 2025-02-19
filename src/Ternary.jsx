const Ternary = () => {
const isTrue = true;
    return (
        <div>
           <button 
            className={`btn text-capitalize ${isTrue ? 'btn-success' : 'btn-danger'}`}
           
        >
            {(isTrue ? 'Login' : 'Logout')}
        </button>

        {isTrue &&<button className="btn btn-primary">Logout Button</button>}
        </div>
    );
};

export default Ternary;