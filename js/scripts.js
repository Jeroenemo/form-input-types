$(document).ready(function() {
  $("form1").submit(function(event) {
    const beverage = parseInt($("#beverage").val());
    const flavor = $("input:radio)[name=flavor]:checked").val();
  });
});