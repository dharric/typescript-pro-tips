namespace TypeAssertions {
    interface Car {
        wheels: number;
        carry();
    }
    
    interface Truck {
        wheels: number;
        payload();
    }
    
    function getVehicle(): Car | Truck {
        // pretend it randomly returns a car or truck
        return {
            wheels: 4,
            payload: () => { console.log( "truck running"); }
        }
    }
    
    let vehicle = getVehicle();
    if((vehicle as Car).carry) {
        (vehicle as Car).carry();
    } else if((vehicle as Truck).payload) {
        (vehicle as Truck).payload();
    }
}