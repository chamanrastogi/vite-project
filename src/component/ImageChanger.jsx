import { useRef, useState } from "react";

const ImageChanger = () => {
    let imag = useRef(null);

    const [src, setSrc] = useState("https://placehold.co/200");
    const imgChnage = () => {
        if (imag.current) {
          // imag.current.classList.remove("animate__animated", "animate__fadeIn");
          // void imag.current.offsetWidth; // Trigger reflow to restart animation
          // imag.current.classList.add("animate__animated", "animate__fadeIn");
          // imag.current.setAttribute('height', '200px');
          imag.current.setAttribute("width", "400px");
        }
        setSrc("https://placehold.co/400");
      };
    return (
        <div>
          <img
            ref={imag}
            src={src}
            alt="Placeholder"
            className="animate__animated animate__fadeIn"
            width="200"
          />
          <div className="form-group py-2">
            <button className="btn btn-info" onClick={imgChnage}>
              Change image
            </button>
          </div>  
        </div>
    );
};

export default ImageChanger;