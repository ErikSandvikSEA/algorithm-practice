// time is O(n) (technically O(2n)), we loop over the array once to populate the occurrences object, and up to one more full time in the for loop over the occurrences object

// space is O(n) - build up the occurrences object

function maxTickets(tickets) {
    let longestSub = 0
    
    const occurrences = buildOccurences(tickets)
            
    for(const ticket in occurrences){
        //make sure we only look at values if they are the smallest val in the subsequence
        // this eliminates repeats and unnecessary loops
        if(isAlreadyProcessed(occurrences, ticket)) continue
        
        let tempTicket = ticket
        const currentSubLength = getCurrentSubLength(occurrences, tempTicket, 0)
        
        longestSub = Math.max(currentSubLength, longestSub)
    }
    return longestSub  
}

function buildOccurences(tickets){
// build up an object that populates each value 
// and the number of times the value appears in the tickets array
    const occurrences = {}
    
    for(const ticket of tickets){
        occurrences[ticket] = (occurrences[ticket] || 0) + 1
    }
    return occurrences
}

function getCurrentSubLength(occurrences, tempTicket, currentLength){
    while(occurrences[tempTicket]){
        currentLength += occurrences[tempTicket]
        tempTicket++
    }
    return currentLength
}

function isAlreadyProcessed(occurrences, ticket){
    //checks to see if the occurrences object has a value 1 less than the current ticket
    //that way we only start a new loop on values we have yet to encounter
    return ((ticket-1) in occurrences)
}