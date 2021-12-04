
const { Door } = require('./doorkata.js');

test('returns true to open door being open', () => {
    let testDoor = Door.OpenAndUnlocked('1234');
    expect(testDoor.isOpen).toBe(true)
})

test('returns false to open door being close', () => {
    let testDoor = Door.OpenAndUnlocked('1234');
    expect(testDoor.isClosed).toBe(false)
})

test('returns true to unlocked door being unlocked', () => {
    let testDoor = Door.OpenAndUnlocked('1234');
    expect(testDoor.isUnlocked).toBe(true)
})

test('returns false to unlocked door being locked', () => {
    let testDoor = Door.OpenAndUnlocked('1234');
    expect(testDoor.isLocked).toBe(false)
})

test('returns false to unlocked door being locked', () => {
    let testDoor = Door.OpenAndUnlocked('1234');
    expect(testDoor.isLocked).toBe(false)
})

test('returns true to closed door being closed', () => {
    let testDoor = Door.ClosedAndUnlocked('1234');
    expect(testDoor.isClosed).toBe(true)
})

test('returns true to locked door being locked', () => {
    let testDoor = Door.ClosedAndLocked('1234');
    expect(testDoor.isClosed).toBe(true)
})

test('closing door returns new close door if door is open ', () => {
    let t = (Door.OpenAndUnlocked('1234')).close();
    expect(t.isClosed).toBe(true)
})

test('should throw and error if door es closed', () => {
    let t = (Door.ClosedAndUnlocked());
    expect(() => t.close()).toThrow(`Invalid door action`)
})

test('should throw an error if door es closed', () => {
    let t = (Door.ClosedAndUnlocked());
    expect(() => t.close()).toThrow(`Invalid door action`)
})

test('opening door should return new open door', () => {
    let t = (Door.ClosedAndUnlocked().open());
    expect(t.isOpen).toBe(true);
})

test('should throw an error if door is already open', () => {
    let t = Door.OpenAndUnlocked();
    expect(() => t.open()).toThrow(`Invalid door action`)
})

test('should return locked door', () => {
    let t = Door.ClosedAndUnlocked().lock();
    expect(t.isLocked).toBe(true)
})

test('should throw an error if door is already locked', () => {
    let t = Door.ClosedAndLocked();
    expect(() => t.lock()).toThrow(`invalid door action`)
})


test('should return unlocked door', () => {
    let t = Door.ClosedAndLocked('1234').unlock('1234');
    expect(t.isUnlocked).toBe(true)
})

test('should throw error wrong key', () => {
    let t = Door.ClosedAndLocked('1234');
    expect(() => t.unlock('5678')).toThrow(`wrong key`)
})

test('should throw an error if door is already unlocked', () => {
    let t = Door.ClosedAndUnlocked();
    expect(() => t.unlock()).toThrow(`invalid door action`)
})
