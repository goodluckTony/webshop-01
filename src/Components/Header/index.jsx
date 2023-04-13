import { createUseStyles } from "react-jss";
 const useStyles = createUseStyles ({
  productForm: {

  }
 })

const Header = () => {
  return (
    <div className={classes.productForm} >
      <p>Header</p>
    </div>
  )
}

export default Header;