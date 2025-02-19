import Button from "./component/Button";


const ObjectComponet = () => {  
    const arr = {
      login: "info",
      register: "danger",
      Admin: "success",
      book: "warning",
      logout: "dark",
    };
  return (
    <div>

      {(()=>{

        return Object.entries(arr).map(([name, style], index) => {
          return <Button key={index} name={name.toUpperCase()} style={style} />;
        })
      })()}
      
    </div>
  );
};

export default ObjectComponet;
