/**
 * Created by tammyslau on 3/24/17.
 */
$(document).ready(function(){
    applyEventHandlers();
    changeShippingType();
});
var shipping_time = "five";
function applyEventHandlers(){
    $(".shippingRadioBtn").on("click", function(){
        changeShippingType()
    });
    $(".calculate").on("click", function(){
        grabWeightAndTime()
    });
    $(".clearForm").on("click", function(){
        clearForm();
    })
}
function clearForm(){
    $(".weightInput").val("");
    $("#defaultChecked").prop("checked", true);
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
    $(".shippingType").text(shipping_time + " days");
}
function grabWeightAndTime(){
    var weightToPounds = $(".weightInput").val();
    var weightToOunces = $(".weightInput").val() * 16;
    displayShipping(weightToPounds, weightToOunces)
}
function getDate(shipping_day){
    var today = new Date();
    var day = today.getDate();
    if(shipping_day){
        shipping_day = parseInt(shipping_day);
        day = parseInt(day);
        var date = new Date();
        date.setDate(day + shipping_day);
        if(date.getDay() === 0) {
            date.setDate(day + shipping_day + 1);
        }
        today = date
    }
    return today.toDateString()
}
function calculateShipping(weight){
    var shippingSpecs = {
        arrivalDate: null,
        weight: null,
        cost:null
    };
    shippingSpecs.arrivalDate = getDate(shipping_time);
    shippingSpecs.weight = weight;
    if(weight > 20 && weight < 32){
        var weightResult = weight * 0.10;
        if(shipping_time == "3"){
            shippingSpecs.cost = "$" + weightResult * 1.5
        }
        else if(shipping_time == "2"){
            shippingSpecs.cost = "$" + weightResult * 2
        } else{
            shippingSpecs.cost = "$" + weightResult
        }

    }
    else if(weight < 20){
        var weightResult = weight * 0.02
        if(shipping_time == "3"){;
            shippingSpecs.cost = "$" + weightResult * 1.5
        }
        else if(shipping_time == "2"){
            shippingSpecs.cost = "$" + weightResult * 2
        } else{
            shippingSpecs.cost = "$" + weightResult
        }
    }
    else if(weight > 32){
        var weightResult = weight * 0.20;
        if(shipping_time == "3"){
            shippingSpecs.cost = "$" + weightResult * 1.5
        }
        else if(shipping_time == "2"){
            shippingSpecs.cost = "$" + weightResult * 2
        } else{
            shippingSpecs.cost = "$" + weightResult
        }
    }
    return shippingSpecs
}
function displayShipping(weightToPounds, weightToOunces){
    clearForm();
    var shippingSpecsObj = calculateShipping(weightToOunces);
    $(".weightOunces").text(shippingSpecsObj.weight);
    $(".weightPounds").text(weightToPounds + " Pounds");
    $(".shippingDepart").text(getDate());
    $(".shippingArrive").text(shippingSpecsObj.arrivalDate);
    $(".cost").text("Cost: " + shippingSpecsObj.cost);
}