import {Flight, ScheduledFlight, CharterFlight} from 'flight';
import {FlightManager} from 'flight-manager';
import {Person, Passenger, Pilot} from 'person';
import {AbstractAddress, CompanyAddress} from 'adressen';
/*let person1: Person = new Passenger();
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
console.debug('isPessenger', isPessenger);*/

class PrivateAddress extends AbstractAddress{
    firstName: string;
    lastName: string;
    constructor(){
        super(0);
    }
    fullAddress(){
        return this.firstName + " " + this.lastName + "," +
        super.fullAddress();
    }
    toCSV(){
        return `${this.id};${this.firstName};${this.lastName};${this.street};${this.zipCode};${this.city}`;
    }
}
let pa1 = new PrivateAddress(1);
pa1.id = 1;
pa1.firstName = "Andreas";
pa1.lastName = "Jurat";
pa1.street = "Testweg 31";
pa1.zipCode = "16761";
pa1.city = "Hennigsdorf";
console.debug("pa1 full Address",pa1.fullAddress());
console.debug("pa1ToCSV",pa1.toCSV());



