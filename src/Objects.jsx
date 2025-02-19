
import Card from "./component/Card";

const ary=[
{ heading: "Card Heading 1", title: "Card Title", body: "Card Body" },
{ heading: "Card Heading 2", title: "Card Title", body: "Card Body" },
{ heading: "Card Heading 3", title: "Card Title", body: "Card Body" }
];
const Objects = () => {  
   
  return (
    <div className="row">
     
    {
      ary.map((item,i)=>{
        return <div className="col-4" key={i}><Card heading={item.heading} title={item.title} body={item.body} /></div>
      })
    }
     
     
    </div>
  );
};

export default Objects;
