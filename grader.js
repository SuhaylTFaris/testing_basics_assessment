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
    if (score >= 80) {
      return 'B' + plusminus();
    }
    if (score >= 70) {
      return 'C' + plusminus();
    }
     if (score >= 60) {
      return 'D' + plusminus();
    }
    return 'F';
  },

  averageGrade: function(arr) {
    if (this.arrayCheck(arr) || !(Array.isArray(arr))) {
      return false;
    }
    var results = 0;
    for (var item in arr) {
      results += arr[item];
    }
    return results / arr.length;
   },
  medianGrade: function(list) {
    if (this.arrayCheck(list) || !(Array.isArray(list))) {
      return false;
    }
    list.sort(function sortNumber(a, b) {
      return b - a;
    });
    if (list.length % 2 !== 0) {
      return list[((list.length + 1) / 2) - 1];
    } else
      return ((list[list.length / 2 - 1] + list[list.length / 2]) / 2);
  },
  modeGrade: function(arr) {
    if (this.arrayCheck(arr) || !(Array.isArray(arr))) {
      return false;
    }
    var freq = {};
    for (var item in arr) {
      if (freq[arr[item]] === undefined) {
        freq[arr[item]] = 0;
      }
      freq[arr[item]] += 1;
    }
    var orderresults = Object.keys(freq).sort(function(a, b) {
      return freq[b] - freq[a];
    });
    return parseInt(orderresults[0]);
  }
};

module.exports = grader;