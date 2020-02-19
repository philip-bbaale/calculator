var add = function(number1, number2) {
  return number1 + number2;
 };
 var subtract = function(number1, number2) {
  return number1 - number2;
 };
 var multiply = function(number1, number2) {
  return number1 * number2;
 };
 var divide = function(number1, number2) {
  return number1 / number2;
 };
 
 
 $(document).ready(function() {

  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var resultadd = add(number1,number2);
    $("#outputAdd").text(resultadd);
  });

  $("form#subtract").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var resultsub = subtract(number1,number2);
    $("#outputSub").text(resultsub);
  });

 });