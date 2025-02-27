import { useRef } from 'react';

const Changecss = (props) => {
    let testType = useRef(null);
    const change = () => {
        testType.current.style.color ='red';
    }
    const changeFont = () => {
        console.log(testType);
        testType.current.style.fontSize ='50px';
    }
    return (
        <div>
            <h2>Change Style Css</h2>

            <p ref={testType}> {props.text}</p>

            <button onClick={change}  className='btn btn-info me-2'>Change color to red</button>
            <button onClick={changeFont}  className='btn btn-warning me-2'>Change Font Size 50px</button>
        </div>
    );
};

export default Changecss;