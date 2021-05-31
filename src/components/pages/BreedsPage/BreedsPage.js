import React, {  useState, useEffect }       from 'react'; 
import { getAllBreeds, getRandomBreedImage } from '../../../api/dog-api';
import { Spinner }                           from  '../../shared';


export function BreedsPage(props){
  /////////////////////////////////////////////////////////////////
  //
  //  Initially, breeds/setBreeds was stored here in local state.
  //  However, it may make more sense to store it in global context
  //  to avoid refetching it every time. That said, in production 
  //  I'd use a caching system like react-query to avoid stale data.
  //
  /////////////////////////////////////////////////////////////////
  const { value: { breeds, setBreeds } }          = props;
  const [ subBreeds,        setSubBreeds ]        = useState([]);
  const [ selectedBreed,    setSelectedBreed ]    = useState({ name: '', subBreeds: [] });
  const [ selectedSubBreed, setSelectedSubBreed ] = useState('');
  const [ breedImageUrl,    setBreedImageUrl ]    = useState('');
  const [ isLoading,        setIsLoading ]        = useState(false);


  // On mount if breeds is empty [] make call to get the breeds.
  useEffect(() => {
    if (Array.isArray(breeds) && breeds.length === 0){ // This assumes the actual data from the API will never return an empty array.
      getAllBreeds()
      .then(breedsArray => { setBreeds(breedsArray); })
      .catch(err => console.log(err));
    } 
  }, [breeds, setBreeds]);

   
  // When selectedBreed changes and no subBreeds exist then make a call to get image.
  // If subBreeds exist, then setSubBreeds(selectedBreed.subBreeds);
  useEffect(() => {  
    if (selectedBreed.name === ""){ 
      setSelectedSubBreed('');
      setSubBreeds([]);
      setBreedImageUrl('');
      return; 
    }

    if (selectedBreed.subBreeds.length === 0){
      setSelectedSubBreed('');
      setSubBreeds([]);
      setIsLoading(true);

      getRandomBreedImage(selectedBreed.name)
        .then(imageUrl => {
          setIsLoading(false);
          setBreedImageUrl(imageUrl);
        })
        .catch(err => {
          setIsLoading(false);
          setBreedImageUrl('');
          setSubBreeds([]);
          console.log(err);
        });
    } else {
      setSubBreeds(selectedBreed.subBreeds);
      setSelectedSubBreed('');
      setBreedImageUrl('');
    }
  }, [selectedBreed]);


  // When a subBreed is selected make the call to get image.
  useEffect(() => {
    if (selectedSubBreed === ""){ return; }
    setIsLoading(true);

    getRandomBreedImage(selectedBreed.name, selectedSubBreed)
      .then(imageUrl => {
        setIsLoading(false);
        setBreedImageUrl(imageUrl);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });

  }, [selectedBreed.name, selectedSubBreed])



  const handleBreedSelect = (e) => {
    const breed = JSON.parse(e.target.value);
    setSelectedBreed(breed);
  };


  const handleSubBreedSelect = (e) => {
    const subBreed = e.target.value;
    setSelectedSubBreed(subBreed);
  };


  const renderImage = () => {
    if (isLoading){
      return (
        <Spinner 
          size={75} 
          variant="pink" 
          style={{ filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.5))' }} 
          containerClasses="d-inline-block"
          containerStyle={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%' }}
          useContainer={false}
        />
      );
    }

    if (breedImageUrl){
      return (
        <img 
          className="d-block h-100 mx-auto mb-3 border border border-dark rounded-3 shadow" 
          style={{ maxHeight: 300 }}
          src={breedImageUrl} alt={`${selectedBreed} dog`} 
        />
      );
    }

    return null;
  }


  return (
    <React.Fragment>
      <h2 className="text-white-3d my-5 text-center">Select A Breed</h2>


      <div className="mx-auto mb-3" style={{ maxWidth: 300 }}>
        <select className="form-select text-gray" onChange={handleBreedSelect}>
          <option value={JSON.stringify({ name: '', subBreeds: [] })}>Select A Breed</option>
          { breeds.map(breed => <option key={breed.name} value={JSON.stringify(breed)}>{breed.name}</option>) }
        </select>
      </div> 


      { (Array.isArray(subBreeds) && subBreeds.length > 0) && (
        <div className="mx-auto mb-3" style={{ maxWidth: 300 }}>
          <select className="form-select text-gray" onChange={handleSubBreedSelect}>
            <option value=''>Select A Sub-Breed</option>
            { subBreeds.map(subBreed => <option key={subBreed} value={subBreed}>{subBreed}</option>) }
          </select>
        </div> 
      )}


      <div className="horizontal-ruler">
        <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
      </div>


      { renderImage() }
    </React.Fragment> 
  );
}
