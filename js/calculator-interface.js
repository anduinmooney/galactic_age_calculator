import { Age } from './../js/calculator.js';

$(document).ready(function() {
  $('#age-form').submit(function(event){
    event.preventDefault();
    let age = $("#age").val();
    let seconds = secondsInYear(age);
    let mercury = mercury(age);
    let venus = ageConvertedIntoVenusAge(age);
    let mars = ageConvertedIntoMarsAge(age);
    let jupiter = ageConvertedIntoJupiterAge(age);
    $("#seconds").text(seconds);
    $("#mercury").text(mercury);
    $("#venus").text(venus);
    $("#mars").text(mars);
    $("#jupiter").text(jupiter);

  });
});
