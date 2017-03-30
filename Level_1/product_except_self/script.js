function productExceptSelf(nums, m) {
    var sum = 0;
    var len = nums.length;
    for(var i = 0; i < len; i++){
        var product = 1;
        var newNumber;
        for(var j=0; j < len; j++){
            if(i == j){
                newNumber = 1;
            }else{
                newNumber = nums[j];
            }
            product = (product*newNumber) % m
        }
        sum += product;
    }
    return (sum % m)
}

console.log(productExceptSelf([1,2,3,4],12));