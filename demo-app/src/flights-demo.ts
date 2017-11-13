import{Flight, ScheduledFlight, CharterFlight} from 'flight';
let nextFlight = new ScheduledFlight();
nextFlight.date = "2017-11-13";
console.debug('unix-date', nextFlight.unixDate);
nextFlight.unixDate = 1860000000;
console.debug('unix-date', nextFlight.date);
