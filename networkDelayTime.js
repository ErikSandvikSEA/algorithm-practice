function networkDelayTime (times, N, K) {
    let catalog = {}
    for (let [source, target, time] of times){
        if (!(source in catalog)) {
            catalog[source] = []
        } 
        catalog[source].push([target, time])
    }
    let distance = {}
    for (let node = 1; node <= N; node++){
        distance[node] = Infinity // node => distance
    }
    distance[K] = 0
    
    let queue = [K]
    while (queue.length){
        let node = queue.shift()
        
        if (node in catalog){
            for (const [nextNode, time] of catalog[node]){
                if (distance[nextNode] > distance[node] + time) {
                    distance[nextNode] = distance[node] + time
                    queue.push(nextNode)
                }
            }
        }
    }
    let maxTime = 0
    for (let key in distance){
        const value = distance[key]
        if(value === Infinity) return -1
        maxTime = Math.max(maxTime, value)
    }
    return maxTime
}