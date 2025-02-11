import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, increaseByNumber, saveStudent } from "../Redux/counterSlice";

const Contact = () => {
  const [num, setnum] = useState(0);
  const [myName, setmyName] = useState("")
  const [myAge, setmyAge] = useState(0)
  const count = useSelector((state) => state.counterReducer.count);
  // console.log(count);
  let dispatch = useDispatch();
  // const count = useSelector(function (state){
  // return state;
  // })

  const saveNum = (e) => {
    let number = e.target.value;
    let newNum = parseInt(number);
    console.log(typeof newNum);
    setnum(newNum)
  };

  return (
    <>
      <h1>Contact Us</h1>
      <h1>Count: {count}</h1>
      <input
        type="number"
        placeholder="enter your number"
        onChange={(e) => saveNum(e)}
      />
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setmyName(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your age"
        onChange={(e) => setmyAge(e.target.value)}
      />
      <button onClick={() => dispatch(increment())}>Increase Number</button>
      <button onClick={() => dispatch(decrement())}>Decrease Number</button>
      <button onClick={() => dispatch(increaseByNumber(num))}>
        Increase By Number
      </button>
      <button onClick={() => dispatch(saveStudent({myName, myAge}))}>
        Save Student
      </button>

    </>
  );
};
export default Contact;
