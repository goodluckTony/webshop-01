import SingleCounter from './SingleCounter';
import { useEffect, useState } from 'react'; 
import CounterList from './CounterList';
import { createUseStyles } from 'react-jss';

const Counters = () => {
  const [counters, setCounters] = useState([
    // {
    //   id: 1,
    //   value: 73
    // },
    // {
    //   id: 2,
    //   value: 87
    // }
  ]);

  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters]);

  const addCounter = () => 
    setCounters(prevState => [
      ...prevState, 
      {
        id: Date.now(), 
        value: 0
      }
    ]);

  const handleIncrement = (id) => 
    setCounters(prevState => 
      prevState.map(counter => 
        counter.id === id 
        ? {
            ...counter, 
            value: counter.value + 1
          }
        : counter
      )
    );

  const handleDecrement = (id) => 
    setCounters(prevState => 
      prevState.map(counter => 
        counter.id === id 
        ? {
            ...counter, 
            value: counter.value - 1
          }
        : counter
      )
    );

  const handleDeleteCounter = (id) => 
    setCounters(prevState => 
      prevState.filter(counter => counter.id !== id)
    );

  return (
    <div className='counters'>
      <p>Counters</p>
      <SingleCounter />

      <button onClick={addCounter}>+ Add counter</button>
      <CounterList 
        counters={counters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDeleteCounter}
      />
    </div>
  )
};

export default Counters;