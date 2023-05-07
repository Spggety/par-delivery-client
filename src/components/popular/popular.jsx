import Header from '../main/header/header';
import ArrowToTop from '../main/navigation/navGlobal/arrowToTop';
import NavGlobal from '../main/navigation/navGlobal/navGlobal';
import ProdPanel from '../main/search/products panel/prodPanel';
import './popular.css'

function Popular(props) {
  return (<><Header line='line' itemNumber={props.state.itemNumber} MATH={props.state.MASS_BURGERINFO} basket={props.state.basket}/>
    <div className="popular">
      <ArrowToTop/>
      <div className = 'popularContain'>
        <h3 className='popularHeader'>Популярные: {props.state.webPlatform}</h3>
        <div className="ProdPanel"><ProdPanel products={props.products}/></div>
      </div>
    </div></>
  );
}
export default Popular;