import {Flight, ScheduledFlight, CharterFlight} from 'flight';
import {FlightManager} from 'flight-manager';
import {Person, Passenger, Pilot} from 'person';
let person1: Person = new Passenger();
person1.firstName = "Max";
person1.lastName = "Muster";
let person1AsPassenger = person1 as Passenger;
let status = person1AsPassenger.passengerStatus;

let person2: Person = new Pilot();
person2.firstName = "Jens";
person2.lastName = "Wolkenmeyer";

let isPerson = person1 instanceof Person;
let isPessenger = person1 instanceof Passenger;
let isPilot = person1 instanceof Pilot;

console.debug('isPerson', isPerson);
console.debug('isPilot', isPilot);
console.debug('isPessenger', isPessenger);






