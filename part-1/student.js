var Student = function(firstName, scores) {
  this.firstName = firstName;
  this.scores = scores || [];
}

Student.prototype.averageScore = function() {
  // var sum = 0;
  // for (var i = 0; i < this.scores.length; i++) {
  //   sum += this.scores[i];
  // }
  var total = this.scores.reduce(function(a, b) {
    return a + b;
  });
  var averageScore = Math.floor((total / this.scores.length));
  return averageScore;
};

Student.prototype.letterGrade = function() {
  if (this.averageScore() >= 90) {
    return "A";
  } else if (this.averageScore() >= 80 && this.averageScore() < 90) {
    return "B";
  } else if (this.averageScore() >= 70 && this.averageScore() < 80) {
    return "C";
  } else if (this.averageScore() >= 60 && this.averageScore() < 70) {
    return "D";
  } else {
    return "F";
  };

}
