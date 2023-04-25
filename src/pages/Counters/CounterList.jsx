import CounterItem from "./CounterItem";
import ErrorBoundary from "../../Components/ErrorBoundary";

const CounterList = ({ counters, onIncrement, onDecrement, onDelete }) => (
  <ErrorBoundary>
    <ul className="counter-list">
      {counters.map(counter => (
        <CounterItem 
          key={counter.id} 
          counter={counter} 
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </ul>
  </ErrorBoundary>
);

export default CounterList