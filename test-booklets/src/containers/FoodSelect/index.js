import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FoodSelect from '../../components/FoodSelect';
import {connect} from 'react-redux';
import { getFood } from '../../store/modules/animals';

class FoodSelectContainer extends Component {

  componentDidMount(){
  	this.props.getFood()
  };

  render(){
    const { food } = this.props.animals
     
    let list = Array.isArray(food) && food.map( item => {
      return {
        id: item.id,
        value: item.name,
        label: item.name,
      }
    });

    return <>{list ? <FoodSelect list = {list} /> : null }</>
  }
};

FoodSelectContainer.propTypes={
  animals: PropTypes.object,
};

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	getFood: () => dispatch(getFood())
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodSelectContainer);