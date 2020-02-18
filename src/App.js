import React from 'react';
import './App.css';
import helpers from './helpers/api';
import CardGrid from './Components/CardGrid';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      date: ''
    };
  }

  async componentDidMount() {
    const allPhotos = [];
    const dates = helpers.getDates();

    // get all dates in the proper format
    const isoDates = dates.map(date => {
      let curDate = new Date(date);
      return curDate.toISOString().substring(0, 10);
    });

    // make response for each given date
    // push set response in application state
    isoDates.forEach(async date => {
      const photoObjects = await helpers.getRoverPhotos(date);
      photoObjects.photos.forEach(obj => {
        allPhotos.push(obj);
      });

      this.setState({ photos: this.state.photos.concat(allPhotos) });
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Rover Images</h1>
        </div>
        <div className="photo-grid">
          <CardGrid photos={this.state.photos} date={this.state.date} />
        </div>
      </div>
    );
  }
}

export default App;
