// import PropTypes from "prop-types";
import laptop from "../assets/laptop.jpg";
import phone from "../assets/phone.jpg";
import { createUseStyles } from "react-jss";
import { deleteProduct } from "../utils/productsApi";

import {IconButton} from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const useStyles = createUseStyles({
  item: {
    display: 'flex',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  card: {
    padding: 10,
  },
  image: {
    height: 100,
  },
  green: {
    '&.MuiPaper-root': {
      backgroundColor: 'green',
    },
  },
});

const images = {
  laptop,
  phone,
};


const ProductItem = ({ product, onDelete }) => {
const classes = useStyles(15);
const handleDelete = () => onDelete(product.id);

  return(
    <li className={classes.item}>
      <CardActionArea>
        <Card          
          className={[
          classes.card,
          product.insurance ? classes.green : '',
          ].join(' ')}
        >
          <p>name: {product.name}</p>
          <p>price: {product.price}</p>
          <p>count: {product.count}</p>
          <p>color: {product.color || '--'}</p>
          <p>insurance: {product?.insurance?.toString() || '--'}</p>
          <p>software: {product?.software?.toString() || '--'}</p>
          <img src={images[product.img]} alt={product.name} className={classes.image} />
        </Card>
      </CardActionArea>
      {/* <button onClick={handleRemoveItem}>X</button> */}
      <div>
        <IconButton>
          <AddShoppingCartOutlinedIcon />
        </IconButton>

        <IconButton>
          <DeleteForeverOutlinedIcon onClick={handleDelete} />
        </IconButton>
      </div>
    </li>
  );
};

// ProductItem.propTypes = {
//   product: PropTypes.shape({
//     name: PropTypes.string,
//     price: PropTypes.number,
//     count: PropTypes.number,
//     color: PropTypes.string,
//     insurance: PropTypes.bool,
//     software: PropTypes.bool,
//     img: PropTypes.string,
//   })
// }
  
export default ProductItem;