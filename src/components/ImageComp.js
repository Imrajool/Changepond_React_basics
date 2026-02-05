
import constData from "../shared/constant/constantfile";

const ImageComp = () =>{
    return(
        <div>
            <h2>This is my Images Component</h2>
            <img src={constData.spiderman} alt="spiderman"/>
            <img src={constData.dog} alt="emoji"/>
            <img src={constData.code} alt="car"/>
        </div>
    )
}

export default ImageComp;