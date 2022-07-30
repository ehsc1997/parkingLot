class ParkingLot {
    slots = [];

    constructor(parkingSize) {
        this.slots = new Array(parkingSize).fill(null);
    }

    park(carId) {
        console.log(`Parking car: ${carId}`);
        if (this.slots.every((slot) => slot != null)) {
            return false;
        }

        for (let i = 0; i <= this.slots.length; i++) {
            const slot = this.slots[i]

            if (slot === null) {
                this.slots[i] = carId
                return true;
            }
        }
    }

    // remove (carId) {
    //     return false
    // }
}