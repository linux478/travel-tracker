// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import { getAllTravelers, getSingleTraveler, getAllTrips, getAllDestinations } from './apiCalls';
import Traveler from './classes/Traveler';
import Trip from './classes/Trip';
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// import './css/_reset.scss';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let traveler;
let trips;
let destinations;



console.log('This is the JavaScript entry file - your code begins here.');

console.log("Hello, world")

//on window load i want page load with the
window.addEventListener('load', loadApiData);

function loadApiData() {
  //load a single traveler and their data for a past, a preset, upcoming, and pending trips
  Promise.all([getSingleTraveler(15), getAllTrips(), getAllDestinations()])
  .then(data => {
    traveler = new Traveler(data[0])
    trips = new Trip(data[0], data[1], data[2])
    trips.findCurrentTravelerTrips()
    console.log(trips.currentTravelerTrips)
  })
}


// 1. Dashboard
// As a traveler:
//
// I should see a dashboard page that shows me:
// All of my trips (past, present, upcoming and pending)
// Total amount I have spent on trips this year. This should be calculated from the trips data and include a travel agent’s 10% fee
