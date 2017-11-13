export abstract class AbstractAddress{
    id: number;
    street: string;
    zipCode: string;
    city: string;

    constructor(id: number){
        this.id = id;
    }
    fullAddress(){
        return this.street + "," + this.zipCode + " " + this.city;
    }
    abstract toCSV(): string;
}

export class CompanyAddress extends AbstractAddress{
    companyName: string;
    toCSV(){
        return `${this.id};${this.companyName};${this.street};${this.zipCode};${this.city}`;
    }
}

