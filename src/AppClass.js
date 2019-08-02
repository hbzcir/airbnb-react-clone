import React,{ useState } from 'react';


function AppClass (){
  const [item, setItem] = useState(1);
  const incrementItem = () => { setItem(item + 1) };
  const decrementItem = () => { setItem(item - 1) };
  return (
    <div classNmae="SetAmount">
      {item}
      <button onClick={incrementItem}> IncrementItem </button>
      <button onClick={decrementItem}> DecrementItem </button>
    </div>
  );
}


export default AppClass
