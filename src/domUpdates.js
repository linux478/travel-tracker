//when working with the data from the api,
//may not need the destination to be its own class
//may want travelers and trips to be classes
//may just need an array of that to total the amount they've spent


//DISPLAY

 const domUpdates = {
  displayCurrentTravelerTrips(currentTravelerTrips){
    let tripsSection = document.querySelector('#jsTripSection')
    currentTravelerTrips.forEach((trip) => {
      const tripCard =
      `<article class= "trip ${trip.id}">
       <h3>Trip Details</h3>
       <p>Trip Destination ${trip.destinationID}</p>
       <p>Trip Date ${trip.date}</p>
       <p>Number of Travelers ${trip.travelers}</p>`
       tripsSection.innerHTML += tripCard
    })
  }
};

export default domUpdates;
