namespace InOperator {
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
    
    function run(vehicle: Car | Truck) {
        if ("payload" in vehicle) {
            (vehicle as Truck).payload();
        } else {
            (vehicle as Car).carry();
        }
    }

    run(vehicle);
}