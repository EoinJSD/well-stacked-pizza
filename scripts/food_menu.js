//  
var filterOptions = document.getElementById("filterOptions");
var filter = filterOptions.getElementsByClassName("filter");
for (var i = 0; i < filter.length; i++) {
  filter[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}