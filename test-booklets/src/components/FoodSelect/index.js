import React from "react";
import Select from '../../ui/Select';

const FoodSelect = props => (
  <>
    <h5>Еда для животного</h5>
    <Select list = {props.list}/>
  </>
);

export default FoodSelect;
