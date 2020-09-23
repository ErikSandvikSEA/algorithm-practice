function getIntersectionNode(h1, h2) {
    let p1 = h1
    let p2 = h2
    while(p1 !== p2){
        if(p1){
            p1 = p1.next
        } else {
            p1 = h2
        }
        if(p2){
            p2 = p2.next
        } else {
            p2 = h1
        }
    }
    return p1
};

