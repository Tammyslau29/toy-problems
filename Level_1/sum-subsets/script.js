function sumSubsets(arr, num) {
    var subSetArray = [];
    backtrack(subSetArray, num, arr, [], 0);
    return subSetArray;
}

function backtrack(subSetArray, num, remainingNums, curSubSet, curSum) {
    console.log(remainingNums);
    console.log(curSubSet);
    console.log(curSum);
    if(curSum === num) {
        var hasArr = false;
        for(var i = 0; i < subSetArray.length; i++) {
            hasArr = isSameArr(subSetArray[i], curSubSet);
            if(hasArr) break;
        }
        if(!hasArr) subSetArray.push(curSubSet);
        return;
    }
    if(curSum > num) {
        return;
    }
    for(var i = 0; i < remainingNums.length; i++) {
        var tmpSubSet = [...curSubSet, remainingNums[i]];
        var tmpSum = curSum + remainingNums[i];
        var tmpRemaining = remainingNums.slice(i+1);
        backtrack(subSetArray, num, tmpRemaining, tmpSubSet, tmpSum);
    }
}
function isSameArr(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return false;
    }
    for(var i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
