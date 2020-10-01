var attendanceRecord = function(s) {
    let absent = false
    let continuousTardies = 0
    for(const day of s){
        if(day === 'A'){
            if(absent){
                return false
            }
            continuousTardies = 0
            absent = true
        } else if (day === 'L'){
            continuousTardies++
        } else {
            continuousTardies = 0
        }
        if(continuousTardies>2){
            return false
        }
    }
    return true
}

