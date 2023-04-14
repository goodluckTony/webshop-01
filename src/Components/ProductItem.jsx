import laptop from "../assets/laptop.jpg";
import phone from "../assets/phone.jpg";

const images = {
  laptop,
  phone,
};

const ProductItem = ({ product }) => (
  <li className="item">
    <p>name: {product.name}</p>
    <p>price: {product.price}</p>
    <p>count: {product.count}</p>
    <img src={images[product.img]} alt={product.name} />
  </li>
);
  
export default ProductItem;