import { useState, useEffect} from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  counter: {
    padding: 10,
  },
  buttons: {
    display: 'flex',
  },
  button: {
    '&:hover': {
      backgroundColor: 'gray',
    },
  },
});


const limit = 50;
const SingleCounter = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);


  // const handleIncrement = () => setValue(value - 1);
  // const handleDecrement = () => setValue(value + 1);
  const handleIncrement = () => setValue((prevState) => prevState - step < 0 ? 0 : prevState - step);
  const handleDecrement = () => setValue((prevState) => prevState + step > limit ? limit : prevState + step);

  const handleChangeStep = e => setStep(Number(e.target.value));

  useEffect(() => {
    console.log('value:', value)
  }, [value]);

  return (
    <div className={classes.counter}>
      <p>SingleCounter</p>

      <div className={classes.buttons}>
        <label htmlFor="my-select">
          <span>step</span>
          <select value={step} onChange={handleChangeStep}>
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </label>
        <button className={classes.button} onClick={handleIncrement}>-</button>
        <p>{value}</p>
        <button className={classes.button} onClick={handleDecrement}>+</button>
      </div>
    </div>
  )
};

export default SingleCounter;