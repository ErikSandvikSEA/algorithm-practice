var isRectangleOverlap = function(rec1, rec2) {
    return((intersect(rec1[0], rec1[2], rec2[0], rec2[2])) && (intersect(rec1[1], rec1[3], rec2[1], rec2[3])))
};

function intersect(leftAxis1, rightAxis1, leftAxis2, rightAxis2){
    return Math.min(rightAxis1, rightAxis2) > Math.max(leftAxis1, leftAxis2)
}
