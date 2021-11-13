export const getAllTravelers = () => {
  return fetch("http://localhost:3001/api/v1/travelers")
  .then(response => response.json())
  //ojbect comes back as a string as the promise so we need to parse it
  //the data in the .then is returning it as an object
  //the .thens are asynch, and will not fire until the one ahead of it is complete
  //FETCH this > wait to get it back > turn it back into an object and parse it > then take that data just given to me > make it the array i want
  .then(data => data.travelers)
  .catch(error => console.log(error))
}

export const getSingleTraveler = (id) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    //fetch returns the promise and the reponse parses it into the object
    .then(response => response.json())
    //then take that data and return it to me
    .then(data => data)
    //console error for the dev not the user
    .catch(error => console.log(error))
}

export const getAllTrips = () => {
  return fetch("http://localhost:3001/api/v1/trips")
  .then(response => response.json())
  .then(data => data.trips)
  .catch(error => console.log(error))
}

export const getAllDestinations = () => {
  return fetch("http://localhost:3001/api/v1/destinations")
  .then(response => response.json())
  .then(data => data.destinations)
  //.then(data => console.log(data)) ==> if i wasn't sure where i was getting or see my data
  .catch(error => console.log(error))
}
