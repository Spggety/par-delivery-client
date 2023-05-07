import { Outlet } from 'react-router-dom';
import ProdPanel from '../search/products panel/prodPanel';
import Tabs, { Panel } from './tabs/tabs';
import './tabsContain.css'

function TabsContain(props) {
  return (
    <div className = 'tabsContain'> 
      <Tabs addToBasket={props.addToBasket} MATH_TABS = {props.MATH_TABS} addLenta={props.addLenta} products={props.products} MATH={props.MATH} />
    </div>
  );
}
export default TabsContain;