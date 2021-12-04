class Door {

    #key;

    static OpenAndUnlocked() {
        let d = new Door('', true, false, true, false);
        return d;
    }

    static OpenAndlocked() {
        let d = new Door('', true, false, false, true);
        return d;
    }

    static ClosedAndUnlocked() {
        let d = new Door('', false, true, true, false);
        return d;
    }

    static ClosedAndLocked(key) {
        let d = new Door(key, false, true, false, true);
        return d;
    }

    get key() { return this.key; }
    set key(value) { this.#key = value; }

    close() {
        if (this.isClosed)
            throw new Error(`Invalid door action`);
        else if (this.isOpen && this.isLocked) {
            return Door.ClosedAndLocked();
        }
        else if (this.isOpen && this.isUnlocked) {
            return Door.ClosedAndUnlocked();
        }
    }

    open() {
        if (this.isOpen)
            throw new Error(`Invalid door action`);
        else if (this.isClosed && this.isLocked) {
            throw new Error(`Invalid door action`);
        }
        else if (this.isClosed && this.isUnlocked) {
            return Door.OpenAndUnlocked();
        }
    }

    lock() {
        if (this.isLocked)
            throw new Error(`invalid door action`);
        if (this.isClosed && this.isUnlocked) {
            return Door.ClosedAndLocked();
        }
    }

    unlock(key) {
        if (this.isUnlocked)
            throw new Error(`invalid door action`);
        if (key != this.#key)
            throw new Error(`wrong key`);
        if (this.isClosed && this.isLocked && key == this.#key) {
            return Door.ClosedAndUnlocked();
        }
    }

    constructor(key, isOpen, isClosed, isUnlocked, isLocked) {
        this.#key = key;
        this.isOpen = isOpen;
        this.isClosed = isClosed;
        this.isUnlocked = isUnlocked;
        this.isLocked = isLocked;
    }
}
module.exports = { Door }