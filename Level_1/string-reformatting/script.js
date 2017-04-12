function stringReformatting(s, k) {
    var stringArray = s.split("");
    var newStringArray=[];
    for(var i=0; i < stringArray.length; i++){
        if(stringArray[i] == "-"){
            stringArray.splice(i,1)
        }
    }
    var stringLength = stringArray.length;
    var remainder = stringLength % k;
    if(remainder == 0 && stringLength !== 0) {
        var count = 0;
        var stringGroup = "";
        for(var j =0; j <= stringLength; j++){
            if(count == k){
                newStringArray.push(stringGroup);
                stringGroup = "";
                stringGroup += stringArray[j];
                count = 1;
            } else{
                stringGroup += stringArray[j];
                count++
            }

        }
    }else if(remainder > 0){
        var count = remainder;
        var stringGroup = "";
        for(var j =0; j <= stringLength; j++){
             if(count == 0){
                newStringArray.push(stringGroup);
                 stringGroup = "";
                 stringGroup += stringArray[j]
                count = k-1;
            } else{
                 stringGroup += stringArray[j];
                 count--;
            }

        }
    } else{
        return
    }
    return newStringArray.join("-")

}

console.log(stringReformatting("-$!5G-R-", 4))