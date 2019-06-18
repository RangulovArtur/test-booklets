import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Animal from '../../components/Animal';


const AnimalContainer = props => {
  const { animals } = props.animals
  const { id } = props
   
  const animal = Array.isArray(animals) && animals
    .filter(item => (item.id === id))
    .map(item => <Animal key={item.id} name={item.name}/>)
   
  return <>{!animal || animal.length > 0 ? animal : <strong>Страницы данного животного не существует</strong>}</>
};

AnimalContainer.propTypes={
  id: PropTypes.string,
  animals: PropTypes.object,
};

const mapStateToProps = state => ({
	...state
});

export default connect(mapStateToProps)(AnimalContainer);

