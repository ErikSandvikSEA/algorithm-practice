var MovingAverage = function(size) {
    this.size = size
    this.nums = []
    this.sum = 0
};

MovingAverage.prototype.next = function(val) {
    this.nums.push(val) 
    this.sum += val
    
    if(this.nums.length > this.size){
        const toRemove = this.nums.shift()
        this.sum -= toRemove
    }
    
    return this.sum / this.nums.length
};
