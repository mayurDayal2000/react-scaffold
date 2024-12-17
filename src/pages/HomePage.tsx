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
      <h1 className="text-center text-4xl my-5 mb-3">Welcome to My World!</h1>
      <ReactLogo
        className="mx-auto my-2 inline-block h-24 w-full transition-[filter] duration-300 will-change-[filter] hover:shadow-['#61dafbaa'] hover:drop-shadow motion-safe:animate-spin"
        style={{ animationDuration: "10s" }}
      />

      <div className="my-24">
        <h3 className="text-center text-2xl">Counter: {count}</h3>

        <div className="flex items-center gap-x-2 justify-center my-2">
          <button
            onClick={() => dispatch(decremented())}
            className="p-2 rounded-md bg-blue-600 hover:bg-blue-400 text-sm"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(amountAdded(3))}
            className="p-2 rounded-md bg-purple-600 hover:bg-purple-500 text-sm"
          >
            Add 3
          </button>
          <button
            onClick={() => dispatch(incremented())}
            className="p-2 rounded-md bg-blue-600 hover:bg-blue-500 text-sm"
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
