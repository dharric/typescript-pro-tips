namespace TypePredicates {
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
    
    function isTruck(vehicle: Car | Truck): vehicle is Truck {
        return typeof (vehicle as Truck).payload === "function";
    }

    console.log("Is truck? ", isTruck(vehicle));
}