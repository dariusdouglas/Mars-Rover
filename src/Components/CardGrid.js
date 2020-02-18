/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardGrid.css';

const CardsGrid = props => {
  const rows = [];
  let row = [];
  let numItemsInRow = 0;
  const { photos } = props;

  for (let i = 0; i < photos.length; i += 1) {
    numItemsInRow += 1;
    row.push(
      <div class="grid-item">
        <Card
          key={i}
          img={photos[i].img_src}
          camera={photos[i].camera.full_name}
          date={photos[i].earth_date}
        />
      </div>
    );
    if (numItemsInRow % 2 === 0) {
      rows.push(<div class="grid-item">{row}</div>);
      row = [];
      numItemsInRow = 0;
    }
  }
  return (
    <div className="card-grid">
      <div class="grid-container">{rows}</div>
    </div>
  );
};

CardsGrid.propTypes = {
  photos: PropTypes.object
};

export default CardsGrid;
