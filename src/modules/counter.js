const SET_DIFF = "counter/set_diff";
const INCREASE = "counter/increase";
const DECREASE = "counter/decrease";

export const onIncrease = () => ({ type: INCREASE });
export const onDecrease = () => ({ type: DECREASE });
export const onSetDiff = (diff) => ({ type: SET_DIFF, diff });
const initial = {
  number: 0,
  diff: 1
};
export default function counter(state = initial, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
    default:
      return state;
  }
}
