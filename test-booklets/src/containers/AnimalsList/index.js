import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AnimalsList from '../../components/AnimalsList';
import {connect} from 'react-redux'
import { getAnimals } from '../../store/modules/animals';

class AnimalsListContainer extends Component {

  componentDidMount(){
    this.props.getAnimals()
  }

  render(){
    const { animals } = this.props.animals

    let list = Array.isArray(animals) && animals.map( item => {
      return {
        link: item.id,
        label: item.name,
      }
    });
    
    return <>{list ? <AnimalsList list = {list} /> : null }</>
  }
}

AnimalsListContainer.propTypes={
  animals: PropTypes.object,
};

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  getAnimals: () => dispatch(getAnimals())
})

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsListContainer)

