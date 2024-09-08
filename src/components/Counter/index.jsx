import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/slices/counterSlice";
const CounterComponent = () => {
  const dispatch = useDispatch();
  const countState = useSelector((state) => state.counter);

  return (
    <div>
      <div>YAC</div>
      Count Value {countState.value}
      <button onClick={() => dispatch(decrement())}>Subtract</button>
      <button onClick={() => dispatch(increment())}>Add</button>
    </div>
  );
};

export default CounterComponent;
