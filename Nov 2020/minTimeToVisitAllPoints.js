let minTimeToVisitAllPoints = function(points) {
    let steps = 0
    
    for(let i = 0; i < points.length - 1; i++) {
        const currentPoint = points[i]
        const nextPoint = points[i + 1]
        
        const row = Math.abs(currentPoint[0] - nextPoint[0]);
        const col = Math.abs(currentPoint[1] - nextPoint[1]);
        steps += Math.max(row, col);
    }    
    return steps;
};