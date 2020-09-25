function merge(arr1, m, arr2, n) {
    let end = arr1.length - 1
    m--;
    n--;
    while (n >= 0) {
        if (arr1[m] > arr2[n]) {
            arr1[end] = arr1[m]
            m--
        } else {
            arr1[end] = arr2[n]
            n--
        }
        end--
    }
    return arr1
 };

