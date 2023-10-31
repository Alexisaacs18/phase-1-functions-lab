// Code your solution in this file! 

const hq = 42

function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - hq)
}

function distanceFromHqInFeet(pickupLocation) {
    let blocks = distanceFromHqInBlocks(pickupLocation)
    return blocks * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400) {
        return 0
    } else if (feet <= 2000 && feet > 400) {
        return (feet - 400) * .02
    } else if (feet <= 2500 && feet > 2000) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}