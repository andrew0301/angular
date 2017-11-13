import {Flight, ScheduledFlight, CharterFlight} from 'flight';
import {FlightManager} from 'flight-manager';
import {Person, Passenger, Pilot} from 'person';
import {AbstractAddress, CompanyAddress} from 'adressen';
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



