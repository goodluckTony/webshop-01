import ProductItem from "./ProductItem";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 10,
  },
})

const ProductList = ({ products, onDelete }) => {


  return(
    <ul>
      {products.map((product) =>  
        product.count ? (
        <ProductItem 
          // removeProduct={removeProduct} 
          key={product.id} 
          product={product} 
          onDelete={onDelete}
        />
        ) : null,
        // !!product.count && <ProductItem key={product.id} product={product} />
      )}
    </ul>
  );
};

export default ProductList;