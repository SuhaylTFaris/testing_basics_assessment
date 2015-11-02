var grader = {
  gradeCheck: function(toGrade) {
    if (toGrade < 0 || toGrade > 100 || isNaN(toGrade) || toGrade.length === 0) {
      return true;
    }
  },
  arrayCheck: function(arrcheck) {
    for (var nums in arrcheck) {
      if (this.gradeCheck(arrcheck[nums])) {
        return true;
      }
    }
  },
  letterGrade: function(score) {
    if (this.gradeCheck(score)) {
      return false;
    }
    function plusminus() {
      if (score % 10 >= 7) {
        return '+';
      }
      if (score % 10 <= 3) {
        return '-';
      }
      return '';
    }
    if (score === 100) {
      return 'A+';
    }
    if (score >= 90) {
      return 'A' + plusminus();
    }
  }
};

module.exports = grader;