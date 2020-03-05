namespace InOperator {
    class Car {
        wheels: number;
        carry() { console.log( "car running"); };
    }
    
    class Truck {
        wheels: number;
        payload() { console.log( "truck running"); }
    }
    
    function getVehicle(): Car | Truck {
        // pretend it randomly returns a car or truck
        const truck = new Truck();
        truck.wheels = 4;
        
        return truck;
    }
    
    let vehicle = getVehicle();
    
    function assertTruck(vehicle: Car | Truck): asserts vehicle is Truck {
        if (vehicle instanceof Truck) {
            console.log("vehicle is a truck!");
            return;
        }
        throw new Error("Not a truck!");
    }

    assertTruck(vehicle);
}