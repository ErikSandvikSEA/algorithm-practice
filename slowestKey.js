var slowestKey = function(releaseTimes, keysPressed) {
    let result = keysPressed[0];
    let slowestTime = releaseTimes[0];
    let diff = -Infinity;
    
    for (let i = 1; i < releaseTimes.length; i++) {
        diff = releaseTimes[i] - releaseTimes[i-1];
        if (diff > slowestTime) {
            slowestTime = diff;
            result = keysPressed[i];
        } else if (diff === slowestTime && result.localeCompare(keysPressed[i]) === -1) {
            result = keysPressed[i];
        }
    }
    return result;
};