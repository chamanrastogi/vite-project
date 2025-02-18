

const Loop = () => {
const city = ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Barishal', 'Rangpur', 'Mymensingh'];

const checker=(item,value)=>{
if(item ===value) 
{
 return "text-danger";
}else
{
 return "text-success";
}
}
    return (
        <ul>

            {city.map((item,index)=>{
                  
                    return <li className={checker(item,"Sylhet")}  key={index}>{item}</li>
                  
            })}
            
        </ul>
    );
};

export default Loop;