export interface Flight{
    id:number;
    from: string;
    to: string;
    date: string;
    distance?: number;
    calcPrice?(): number;
}

export class ScheduledFlight{
    id: number;
    from: string;
    to: string;
    date: string;
    distance: number;
    calcPrice(){
        return this.distance/3;
    }
}

export class CharterFlight{
    id: number;
    from: string;
    to: string;
    distance: number;
    calcPrice(){
        return this.distance/2;
    }
}
