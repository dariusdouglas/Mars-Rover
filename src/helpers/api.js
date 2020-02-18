const apiKey = 'SabrJj2V6gDfoXLmI0rXGiU3SteOExn3n8PAxHSi';

const helpers = {
  getRoverPhotos: async date => {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`
    );

    return response.json();
  },
  getDates: () => {
    return ['02/27/17', 'June 2, 2018', 'Jul-13-2016', 'April 31, 2018'];
  }
};

export default helpers;
