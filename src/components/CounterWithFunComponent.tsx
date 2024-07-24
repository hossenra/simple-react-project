import ChildComponent from "./ChildComponent";

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFunComponent = ({ count, setCount }: TProps) => {
  console.log("render");

  return (
    <div className="border border-red-500 p-10 m-10">
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      <ChildComponent count={count} />
    </div>
  );
};

export default CounterWithFunComponent;
