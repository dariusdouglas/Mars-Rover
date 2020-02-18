import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const RoverCard = props => {
  return (
    <div className="card">
      <img className="img" src={props.img} alt={props.img} />
      <div className="container">
        <h4>
          <b>Date: {props.date}</b>
        </h4>
        <p> Camera: {props.camera}</p>
      </div>
    </div>
  );
};

RoverCard.propTypes = {
  img: PropTypes.string,
  camera: PropTypes.string,
  date: PropTypes.string
};

export default RoverCard;
