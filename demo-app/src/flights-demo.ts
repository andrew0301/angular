import{Flight, ScheduledFlight, CharterFlight} from 'flight';
let scheduledFlight: Flight = new ScheduledFlight();
scheduledFlight.distance= 1000;
let charterFlight: Flight = new CharterFlight();
charterFlight.distance = 1000;
let flights: Flight[] =[scheduledFlight,charterFlight];
console.debug('imperative Variante');
for(let f of flights){
    if(f.calcPrice){
        console.debug('Preis', f.calcPrice());
    }
}
