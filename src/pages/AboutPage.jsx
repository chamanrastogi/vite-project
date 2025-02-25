
import { useParams } from 'react-router-dom';
import Menu from '../component/Menu';
const AboutPage = () => {
    let {id ,name} =useParams();
    return (
        <>
        <Menu/>
            <h2>This is About Page </h2>
            <p>id: {id}</p>
            <p>Name: {name}</p>
        </>
    );
};

export default AboutPage;