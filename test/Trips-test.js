import { expect } from 'chai';
import Trip from '../src/classes/Trip.js';


describe('Trip', () => {
  let tripData;
  let trip;
  let destinationData

  beforeEach(function() {
    tripData = {
      "id": 1,
      "userID": 44,
      "destinationID": 49,
      "travelers": 1,
      "date": "2022/09/16",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": []
 };
    destinationData = {
      "id": 1,
      "destination": "Lima, Peru",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 400,
      "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      "alt": "overview of city buildings with a clear sky"
      };
        trip = new Trip(tripData, destinationData)

      });

 it('should be a function', function() {
   expect(Trip).to.be.a('function');
 });

  it('should institate an instance of Trip', function() {
    expect(trip).to.be.instanceOf(Trip);
  });

  it('should have an ID', function() {
    expect(trip.id).to.equal(1);
  });

  it('should have a UserID', function() {
    expect(trip.userID).to.equal(44);
  });

  it('should have a destination', function() {
    expect(trip.destinationID).to.equal(49);
  });

  it('should have travelers', function() {
    expect(trip.travelers).to.equal(1);
  });

  it('should have a date', function() {
    expect(trip.date).to.equal("2022/09/16");
  });

  it('should have a duration', function() {
    expect(trip.duration).to.equal(8);
  });

  it('should have a status', function() {
    expect(trip.status).to.equal("approved");
  });

  it('should have suggested activities', function() {
    expect(trip.suggestedActivities).to.deep.equal([]);
  });
});
