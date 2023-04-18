import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles ({
  productForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'flex',
    paddingLeft: 10,
    paddingTop: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    
  },
})

const ProductForm = ({ onSubmit }) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name,
      price: Number(price),
      count: Number(count),
      img: image,
    };
    onSubmit(newItem);

    setName('');
    setPrice('');
    setCount('');
    setImage('')
  };

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangePrice = (e) => setPrice(e.target.value);
  const handleChangeCount = (e) => setCount(e.target.value);
  const handleChangeImage = (e) => setImage(e.target.value);

  return (
    <form className={classes.productForm} onSubmit={handleSubmit}>
      <label className={classes.label}>
        <span>Name:</span>
        <input className={classes.input} name="name" type="text" value={name} onChange={handleChangeName} />
      </label>
      <label className={classes.label}>
        <span>Price:</span>
        <input className={classes.input} type="text" value={price} onChange={handleChangePrice} />
      </label>
      <label className={classes.label}>
        <span>Count:</span>
        <input className={classes.input} type="text" value={count} onChange={handleChangeCount} /> 
      </label>
      <label className={classes.label}>
        <span>Image:</span>
        <select className={classes.input} value={image} onChange={handleChangeImage}>
          <option value="phone">phone</option>
          <option value="laptop">laptop</option>
        </select>
      </label>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default ProductForm;