//BACK END
var signsA = [];
var symptomsA = [];
var copingA = [];

  function levels() {
    if (signsA.length > copingA.length) {
      alert("you need more coping")
    } else if (signsA.length < copingA.length) {
      alert("you're doing good")
    } else if (copingA.length === signsA.length) {
      alert("You'r stress level is balanced")
    } else {
      alert("could not find a solution for you!");
    }
  }
//FRONT END
$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=warningsign]:checked").each(function(){
      var signs = $(this).val();
      signsA.push(signs);
    });

    $("input:checkbox[name=symptoms]:checked").each(function(){
      var symptoms = $(this).val();
      symptomsA.push(symptoms);
    });

    $("input:checkbox[name=coping]:checked").each(function(){
      var coping = $(this).val();
      copingA.push(coping);
    });
    // alert(signsA);
    // alert(symptomsA);
    // alert(copingA);
    levels()
  });
});
