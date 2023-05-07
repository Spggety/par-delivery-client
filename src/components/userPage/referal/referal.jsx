import './referal.css'
import '../userPage.css'
import NavForm from '../navForm/navForm';
function Referal(props) {
    return(
<div className="userPage">
      <div className="hr"></div>
      <ReferalNavPanel/>
      <div className="userPageContain">
        <NavForm/>
      </div>
      </div>
    )
}

const ReferalNavPanel = (props) => {
    return(
        <div className="referalNavPanel">

        </div>
    )
}
export default Referal;