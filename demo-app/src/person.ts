export class Person{
    id: number;
    firstName: string;
    lastName: string;
    fullName(){
        return this.firstName + " " + this.lastName;
    }
}

export class Passenger extends Person{
    passengerStatus: string;
}

export class Pilot extends Person{
    licenseNumber: string;
}
