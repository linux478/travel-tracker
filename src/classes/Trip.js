class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
    this.totalCost = 0;
  }

  //have a method on the calss that takes in the destination,. flight and per day cost and the 10% agent fee and does all of the math here and spits out a # and reassigns the property cost to that total
  //tiny sample of data from the api
  //same thing with destination tripData

  //when using BEFOREEACH: any time passing use these samples so i am not calling an api request every time i run a test
  //this stuff is under the hood


  //ON LOAD: have something in scripts file > says when this window onload > fire these methods (methods in scripts that pull API data and assign it to global variables (travelers, destinations, trips)
//in script let travelers, let trips, let desination ==> my global vars > the function that invokes my api calls stores the data in those variables > API calls get allUsers, getAllTrips, getAllProjects ===> assign to promise.all?
//invoke the API calls and then assign that data to this variable --> get a traveler call, not doing login yet but say fetch traveler/1 and set as current user that is presently loggedin & trip class, filter to trips data and api stuff, give me only the trips that belong to this usersID(return all trips to taht user))
// if traveler id matches user id then show me that trip and return only those
};

export default Trip;