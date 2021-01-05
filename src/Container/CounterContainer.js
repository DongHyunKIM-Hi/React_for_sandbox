import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../componenets/Counter";
import { onDecrease, onIncrease, onSetDiff } from "../modules/counter";

export default function CounterContainer() {
  const { number, diff } = useSelector((state) => ({
    number: state.number,
    diff: state.diff
  }));
  const dispatch = useDispatch();
  const Increase = () => dispatch(onIncrease());
  const Decrease = () => dispatch(onDecrease());
  const SetDiff = (diff) => dispatch(onSetDiff(diff));
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={Increase}
      onDecrease={Decrease}
      onSetValue={SetDiff}
    />
  );
}
