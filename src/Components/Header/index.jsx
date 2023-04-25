import { useState, useEffect } from "react"; 
import {IconButton} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import styles from "./styles.module.css";
import { getCart } from "../../utils/productsApi";

const Header = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart().then((data) => setCart(data))
  }, []);

  return (
    <div className={styles.header}>
      <p>Header</p>
      <IconButton>
        <Badge badgeContent={cart.length} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default Header;