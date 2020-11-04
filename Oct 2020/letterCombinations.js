function letterCombinations (digits) {
    const dialPad = {
      "2": ["a", "b", "c"],
      "3": ["d", "e", "f"],
      "4": ["g", "h", "i"],
      "5": ["j", "k", "l"],
      "6": ["m", "n", "o"],
      "7": ["p", "q", "r", "s"],
      "8": ["t", "u", "v"],
      "9": ["w", "x", "y", "z"]
    }
    if(digits.length <= 1){
        return dialPad[digits] || []
    } 
    
    const first = digits.slice(0, 1)
    const remaining = digits.slice(1)
    const otherCombos = letterCombinations(remaining)
    const firstLetters = dialPad[first]
    let result = []
    
    for(const char of firstLetters){
      for(const otherChar of otherCombos){
        result.push(char + otherChar)
      }
    }
    return result
};

