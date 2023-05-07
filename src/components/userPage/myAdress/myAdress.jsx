import './myAdress.css'
import '../userPage.css'
import NavForm from '../navForm/navForm';
function MyAdress(props) {
    return(
<div className="userPage">
      <div className="hr"></div>
      <MyAdressNavPanel/>
      <div className="userPageContain">
        <NavForm/>
      </div>
      </div>
    )
}

const MyAdressNavPanel = (props) => {
    return(
        <div className="MyAdressNavPanel">

        </div>
    )
}
export default MyAdress;

