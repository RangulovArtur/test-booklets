import React from "react";
import AnimalContainer from "../containers/Animal";
import FoodSelectContainer from "../containers/FoodSelect";

const Animal = props => (
  <>
    <p>Конкретное животное</p>
    <AnimalContainer id = {props.match.params.id}/>
    <FoodSelectContainer />
  </>
);

export default Animal;


