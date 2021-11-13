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
  });
    it('should be a function', function() {
      expect(Traveler).to.be.a('function');
    });

    it('should instantiate a Travler', function () {
      expect(traveler).to.be.an.instanceOf(Traveler);
    });

    it('should have a id', function() {
      expect(traveler.id).to.be.equal(50);
    });

    it('should have a name', function() {
      expect(traveler.name).to.be.equal("Morey Flanders");
    });

    it('should have a traveler type', function() {
      expect(traveler.travelerType).to.be.equal("foodie");
    });









});
