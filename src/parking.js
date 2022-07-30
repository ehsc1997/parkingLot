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
            const slot = this.slots[i];

            if (slot === null) {
                this.slots[i] = carId;
                return true;
            }
        }
    }

    remove (carId) {
        console.log(`Leaving car: ${carId}`);
        if (this.slots.every((slot) != carId)) {
            return false;
        }

        for (let i = 0; i < this.slots.length; i++) {
            slot = this.slots[i];

            if (slot == carId) {
                this.slots[i] = null;
                return true;
            }
        }
    }

    getSlots() {
        console.log(`Parking slots: ${this.slots}`);
        return this.slots;
    }

    getSize() {
        console.log(`Parking lot size: ${this.slots.length}`);
        return this.slots.length;
    }

    getAvailable() {
        const available = this.slots.filter((s) => s === null).length;
        console.log(`Parking spaces available: ${available}`);
        return available;
    }

    isFull() {
        console.log(`Parking lot is full: ${this.getAvailable === 0}`);
        return this.getAvailable === 0;        
    }
}

export default ParkingLot;