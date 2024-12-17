import ReactLogo from "@assets/react.svg?react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  amountAdded,
  decremented,
  incremented,
} from "@store/slices/counterSlice";

function HomePage() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <>
      <h1>Welcome to My World!</h1>
      <ReactLogo className="logo react" />

      <div>
        <h3>Counter: {count}</h3>
        <button onClick={() => dispatch(decremented())}>Decrement</button>
        <button onClick={() => dispatch(incremented())}>Increment</button>
        <button onClick={() => dispatch(amountAdded(3))}>Add 3</button>
      </div>
    </>
  );
}

export default HomePage;
