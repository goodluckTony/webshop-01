import Products from "../../pages/Products";
import Contacts from "../../pages/Contacts";

const Content = () => {
  const { pathname } = window.location;
  return (
    <div className="content">
      {pathname === '/products' && <Products />}
      {pathname === '/contacts' && <Contacts />}      
    </div>
  )
}

export default Content;