var removeElements = function(head, val) {
    let prev = null
    let p1 = head
    while(p1){
        if(p1.val === val){
            if(p1 === head){
                head = head.next
                p1 = p1.next
            } else if (prev){
                prev.next = p1.next
                p1 = p1.next
            }
        } else {
            prev = p1
            if(p1){
                p1 = p1.next
            }
        }
    }
    return head
};
