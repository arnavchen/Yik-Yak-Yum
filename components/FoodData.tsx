export default class FoodData {
    location: string;
    details: string;
    coords: string;
    date: number;
    // Optional params
    doorAccess?: boolean;
    transportation?: boolean;
    phoneNeeded?: boolean;
    idNeeded?: boolean;
    constructor(location: string, details: string, coords: string, date: number, doorAccess?: boolean, transportation?: boolean, phoneNeeded?: boolean, idNeeded?: boolean) {
        this.location = location;
        this.details = details;
        this.coords = coords;
        this.date = date;
        this.doorAccess = doorAccess;
        this.transportation = transportation;
        this.phoneNeeded = phoneNeeded;
        this.idNeeded = idNeeded;
    }
}
