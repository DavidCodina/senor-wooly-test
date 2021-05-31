import axios from 'axios';
axios.defaults.validateStatus = function(status){ return status >= 200 && status < 300 }; // Default:


/* =============================================================================
                                getAllBreeds
============================================================================= */


export function getAllBreeds(){
  const config = { timeout: 1000 * 25 };
  return axios.get(`${process.env.REACT_APP_DOG_API}/breeds/list/all`, config)
  .then(res => {
    const breedsObject = res.data.message;
    const breedsArray  = Object.entries(breedsObject).map(
      ([key, value]) => { return { "name": key, "subBreeds": value }; }
    );
    return breedsArray;
  });
}


/* =============================================================================
                              getRandomBreedImage
============================================================================= */


export function getRandomBreedImage(breed, subBreed = ''){
  const config = { timeout: 1000 * 25 };

  if (!subBreed){
    return axios.get(`${process.env.REACT_APP_DOG_API}/breed/${breed}/images/random`, config)
      .then(res => {
        const imageUrl = res.data.message;
        return imageUrl;
      });
  }


  return axios.get(`${process.env.REACT_APP_DOG_API}/breed/${breed}/${subBreed}/images/random`, config)
    .then(res => {
      const imageUrl = res.data.message;
      return imageUrl;
    });
}