import React from 'react';

const areEqual = (prevProps, nextProps) => prevProps.counter.value === nextProps.counter.value;

const CounterItem = React.memo(
  ({ counter, onIncrement, onDecrement, onDelete }) => {
    const handleIncrement = () => onIncrement(counter.id);
    const handleDecrement = () => onDecrement(counter.id);
    const handleDelete = () => onDelete(counter.id);

    console.log('render: ', counter.id);

    if (counter.value > 10) {
      throw new Error('boom');
    }

    return (
      <li className="counter-item">
        <button onClick={handleDecrement}>-</button>
        <span>{counter.value}</span>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDelete}>X</button>
      </li>
    );
  },
  areEqual,
);

export default CounterItem;