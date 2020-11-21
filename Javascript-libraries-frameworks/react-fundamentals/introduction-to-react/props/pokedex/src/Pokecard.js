import React, { Component } from "react";
import PropTypes from "prop-types";
import './App.css';

export default class Pokecard extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='box' style={{ color: '#0048FB', textAlign: 'center', paddingTop: '20px' }}>{this.props.name}</h1>
        <img className='box' src={this.props.image} alt={this.props.name} />
        <p className='box' style={{ color: '#000', textAlign: 'center' }}><strong>Type: {this.props.type}</strong></p>
      </div>
    );
  }
}

  
Pokecard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string
};
