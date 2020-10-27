function maxTickets(tickets) {
    // most --- most elements in subarray (this is what we'll return)
    let most = 1
    
    // populate a JS object to hold all the values in tickets, and how many times they occur
    const catalog = {}
    for(const ticket of tickets){
        catalog[ticket] = (catalog[ticket] || 0) + 1
    }
    
    //loop over the tickets array
    for(let i = 0; i < tickets.length; i++){
        const ticket = tickets[i]
        
        // set a currentLength variable that we can compare to the most at the end of each loop
        // set it to the value in the catalog, which shows how many times it's in the tickets array
        let currentLength = catalog[ticket]

        // check for the leftNeighbor and rightNeighbors, 
        // if they exist in the tickets catalog object, increment our    current counter
        let leftNeighbor = ticket - 1
        while(leftNeighbor in catalog){
            currentLength += catalog[leftNeighbor]
            leftNeighbor--
        }
        let rightNeighbor = ticket + 1
        while(rightNeighbor in catalog){
            currentLength += catalog[rightNeighbor]
            rightNeighbor++
        }   
        
        //do our comparison to get the longest subArray that meets the conditions
        most = Math.max(most, currentLength)
    }
    return most
}