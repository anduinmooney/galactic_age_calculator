import { Age } from './../js/calculator.js';

$(document).ready(function() {
  $('#age-form').submit(function(event){
    event.preventDefault();
    let age = $("#age").val();
    let solarAge = new Age(age);
    let seconds = solarAge.secondsInYear(age);
    let mercury = solarAge.mercuryAge(age);
    let venus = solarAge.venusAge(age);
    let mars = solarAge.marsAge(age);
    let jupiter = solarAge.jupiterAge(age);
    $("#seconds").text(seconds);
    $("#mercury").text(mercury);
    $("#venus").text(venus);
    $("#mars").text(mars);
    $("#jupiter").text(jupiter);

  });
});
