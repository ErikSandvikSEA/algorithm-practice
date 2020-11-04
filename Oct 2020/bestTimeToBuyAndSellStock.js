function maxProfit(prices) {
    let maxProf = 0
    for(let i = 0; i < prices.length; i++){
        let j = i+1
        while(prices[i] < prices[j] && j < prices.length){
            const prof = prices[j] - prices[i]
            if(prof > maxProf){
                maxProf = prof
            }
            j++
        }
    }
    return maxProf 
};