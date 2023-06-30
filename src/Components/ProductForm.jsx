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
  error: {
    color: 'red',
  },
  fieldset: {
    display: 'flex',
    justifyContent: 'space-between'
  },
})

const ProductForm = ({ onSubmit }) => {
  const classes = useStyles();

  const [error, setError] = useState('');

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');
  const [color, setColor] = useState('white');
  const [insurance, setInsurance] = useState(false);
  const [software, setSoftware] = useState(false);
  const [image, setImage] = useState('phone');

  const handleSubmit = (e) => {
    e.preventDefault();

    // const hasEmptyField = !name || !price || !count;
    // if (hasEmptyField) {
    //   setError('Please fill all fields');
    //   return;
    // }

    // const hasEmptyField = Object.values(useState).some((item) => !item);
    // if (hasEmptyField) return;

    const newItem = {
  
      name,
      price: Number(price),
      count: Number(count),
      color,
      insurance,
      software,
      img: image,
    };
    onSubmit(newItem);

    setName('');
    setPrice('');
    setCount('');
    setColor('white');
    setInsurance(false);
    setSoftware(false);
    setImage('phone');
    setError('');
  };

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangePrice = (e) => setPrice(e.target.value);
  const handleChangeCount = (e) => setCount(e.target.value);
  const handleChangeColor = (e) => setColor(e.target.value);
  const handleChangeInsurance = (e) => setInsurance(e.target.checked);
  const handleChangeSoftware = (e) => setSoftware(e.target.checked);
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
        <select className={classes.input} value={image} onChange={handleChangeImage} >
          <option value="phone">phone</option>
          <option value="laptop">laptop</option>
        </select>
      </label>

      <fieldset className={classes.fieldset}>
        <legend>Color: </legend>
        <label htmlFor="">
          <span>white</span>
          <input type="radio" name="color" value="white" checked={color === "white"} onChange={handleChangeColor} />
        </label>
        <label htmlFor="">
          <span>gray</span>
          <input type="radio" name="color" value="gray" checked={color === "gray"} onChange={handleChangeColor} />
        </label>
        <label htmlFor="">
          <span>black</span>
          <input type="radio" name="color" value="black" checked={color === "black"} onChange={handleChangeColor} />
        </label>
      </fieldset>

      <fieldset className={classes.fieldset}>
        <legend>Color: </legend>
        <label htmlFor="">
          <span>Insurance (12m)</span>
        </label>
        <input 
          type="checkbox"
          name="insurance"
          checked={insurance}
          onChange={handleChangeInsurance} 
        />

        <label htmlFor="">
          <span>Software</span>
        </label>
        <input 
          type="checkbox"
          name="software"
          checked={software}
          onChange={handleChangeSoftware} 
        />
      </fieldset>

      {error && <p className={classes.error}>{error}</p>}

      <button type="submit">+ Add</button>
    </form>
  );
};

export default ProductForm;