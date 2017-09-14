function bubbleSort(arr){
    var trigger = false;
    for (var i=0; i<arr.length; i++){
        if (arr[i] > arr[i+1]){
            swap()
            trigger = true;
            var temp = arr[i+1];
            arr[i+1] = arr[i]
            arr[i] = temp;
        }
    }
    if (trigger) {bubbleSort(arr)}
    return arr;
}

function swap(){}


