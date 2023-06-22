// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    // Assuming Scuber's headquarters is located at block 42
    return Math.abs(someValue - 42);
  }
  function distanceFromHqInFeet(someValue) {
    var blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // Each block is 264 feet long
  }
  function distanceTravelledInFeet(start, destination) {
    var blocks = Math.abs(destination - start);
    return blocks * 264; // Each block is 264 feet long
  }
  function calculatesFarePrice(start, destination) {
    var distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25 for distance between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
  }
        