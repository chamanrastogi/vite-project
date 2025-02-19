
const Switch = () => {

    const status ='ssd';
   switch(status){
         case true:
              return <div>ON</div>
         case false:
              return <div>OFF</div>
         default:
              return <div>Unknown</div>
    }
};

export default Switch;