// import Products from "../../pages/Products";
// import Contacts from "../../pages/Contacts";
// import Counters from "../../pages/Counters";
import { routes } from "../routes";

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className="content">
      {routes.map(({ path, component: Component }) => pathname === path && <Component key={path}/>)}

      {/* {routes.map(({ path, component: Component }) => pathname === path ? <Component key={path}/> : null)} */}

      {/* {pathname === '/products' && <Products />}
      {pathname === '/contacts' && <Contacts />}      
      {pathname === '/counters' && <Counters />} */}
    </div>
  )
}

export default Content;