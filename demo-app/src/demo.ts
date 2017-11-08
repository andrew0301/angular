import {Flight} from 'flight';

let f: Flight{
    id: 1,
    from: 'Stuttgart',
    to: 'Berlin Tegel',
    date: '2017-11-16T17:00:00.00+01:00'
}
f.from = 'STR';
f.to = 'TGX';
console.debug('from',f.from);
console.debug('flight',f);

