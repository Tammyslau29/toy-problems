/**
 * Created by tammyslau on 3/24/17.
 */
$(document).ready(function(){
    applyEventHandlers()
    changeShippingType();
})
var shipping_time = "five";
function applyEventHandlers(){
    $(".shippingRadioBtn").on("click", function(){
        changeShippingType()
    });
    $(".calculate").on("click", function(){
        display_shipping()
    })
}
function validateKeydown(event){
    var charCode = "" + event.keyCode;
    var acceptedCodes=["48", "49", "50", "51", "52", "53", "54","55","56", "57", "46", "8"];
        if(acceptedCodes.indexOf(charCode) < 0){
           $(".validateKey").text("Please Enter A Number Between 0-9 Or A Decimal")
        }
        else{
            $(".validateKey").text("")
        }
}
function changeShippingType(){
    shipping_time = $(".shippingRadioBtn:checked").val();
    $(".shippingType").text("Shipping Type: " + shipping_time + " day");
}
function grabWeightAndTime(){
    var weightToPounds = $(".weightInput").val();
    var weightToOunces = $(".weightInput").val() * 16;
    calculateShipping(weightToOunces, shipping_time)
}
function getDate(shipping_day){
    var weekdayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var today = new Date();
    var day = today.getDay();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    switch (day){
        case 0:
            day = weekdayArray[0];
            break;
        case 1:
            day = weekdayArray[1];
            break;
        case 2:
            day = weekdayArray[2];
            break;
        case 3:
            day = weekdayArray[3];
            break;
        case 4:
            day = weekdayArray[4];
            break;
        case 5:
            day = weekdayArray[5];
            break;
        case 6:
            day = weekdayArray[6];
            break;
    }
    today = day + ", " + mm + "/" + dd + "/" + yyyy;
    if(shipping_day){
        shipping_day = parseInt(shipping_day);
        parseInt(dd);
        today.setDate(4)
        if(day == "Sunday"){
            day = "Monday"
        }
        today = day + ", " + mm + "/" + dd + "/" + yyyy
    }
    return today
}
function calculateShipping(weight, time){
    var shippingSpecs = {
        arrivalDate: null,
        weight: null,
        cost:null
    };
    shippingSpecs.arrivalDate = getDate(shipping_time)
    shippingSpecs.weight = weight;
    if(weight > 20 && weight < 32){
        var weightResult = weight * 0.10
        if(time == "three"){
            shippingSpecs.cost = "$" + weightResult * 1.5
        }
        else if(time == "two"){
            shippingSpecs.cost = "$" + weightResult * 2
        } else{
            shippingSpecs.cost = "$" + weightResult
        }

    }
    else if(weight < 20){
        var weightResult = weight * 0.02
        if(time == "three"){;
            shippingSpecs.cost = "$" + weightResult * 1.5
        }
        else if(time == "two"){
            shippingSpecs.cost = "$" + weightResult * 2
        } else{
            shippingSpecs.cost = "$" + weightResult
        }
    }
    else if(weight > 32){
        var weightResult = weight * 0.20;
        if(time == "three"){
            shippingSpecs.cost = "$" + weightResult * 1.5
        }
        else if(time == "two"){
            shippingSpecs.cost = "$" + weightResult * 2
        } else{
            shippingSpecs.cost = "$" + weightResult
        }
    }
}