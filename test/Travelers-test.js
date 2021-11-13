import { expect } from 'chai';
import Traveler from '../src/classes/Traveler.js';


describe('Traveler', () => {
  let travelerData;
  let traveler;


  beforeEach(function() {
    travelerData =  {
      "id": 50,
      "name": "Morey Flanders",
      "travelerType": "foodie"
    };
    traveler = new Traveler(travelerData);
    })

    it('should be a function', function() {
      expect(Traveler).to.be.a('function');
    })

    it('should instantiate a Travler', function () {
      expect(traveler).to.be.an.instanceOf(Traveler)
    })






});
