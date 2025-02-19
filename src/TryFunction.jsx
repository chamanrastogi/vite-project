

const TryFunction = () => {
    const status = true;
    return (
        <div>
            <h2>Login Status</h2>
            {(()=>{
                if(status) 
                    {return 155;

                    }else{
                        return 189;
                    }   
                
            })()}
        </div>
    );
};

export default TryFunction;