import "./navGlobal.css";
import "../../../../icons/style.css";
import { ScrollToTop } from "../../../../redux/state";


const ArrowToTop = () =>{
    return(
    <button onClick={ScrollToTop} className="arrowToTop">
        <i className="ic_Arrow---Up"></i>
    </button>)
    
}

export default ArrowToTop;