var grades = [ 100, 75, 50, 25, 0];
function mean(grades) {
  var i, total = 0;
  var len = grades.length;

  for(i = 0; i < len; i++) {
    total += grades[i];
  }
  return Math.floor(total / len);
}
console.log(mean(grades));