import React from "react";

const Select = ({list}) => {
  return(
  <>
    <input type='text' list='defaultselect' onChange={(event)=>console.log(event.target.value)}/>
    <datalist id='defaultselect'>
    	{list && list.map(item => <option key={item.id} value={item.value} />)}
    </datalist>
  </>
  )
};

export default Select;