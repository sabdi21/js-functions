function sillySum(grades) {
    var total = 0;
  
    for(let idx = 0; idx < grades.length; idx++) {
      var totalSum = grades[idx] * idx;
      total = total + totalSum;
    }
    return total;
  }
  console.log(sillySum(grades))