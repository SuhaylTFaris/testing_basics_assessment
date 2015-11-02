var grader =require('./grader.js');

describe('grader', function() {
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'A+';
   expect(grader.letterGrade(100)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'A+';
   expect(grader.letterGrade(99)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'A+';
   expect(grader.letterGrade(98)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'A+';
   expect(grader.letterGrade(97)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'A';
   expect(grader.letterGrade(96)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'A';
   expect(grader.letterGrade(95)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'A';
   expect(grader.letterGrade(94)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'A-';
   expect(grader.letterGrade(93)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'A-';
   expect(grader.letterGrade(92)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'A-';
   expect(grader.letterGrade(91)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'A-';
   expect(grader.letterGrade(90)).toBe(expectedGrade);
 });
  it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'B+';
   expect(grader.letterGrade(89)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'B+';
   expect(grader.letterGrade(88)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'B+';
   expect(grader.letterGrade(87)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'B';
   expect(grader.letterGrade(86)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'B';
   expect(grader.letterGrade(85)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'B';
   expect(grader.letterGrade(84)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'B-';
   expect(grader.letterGrade(83)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'B-';
   expect(grader.letterGrade(82)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'B-';
   expect(grader.letterGrade(81)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'B-';
   expect(grader.letterGrade(80)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'C+';
   expect(grader.letterGrade(78)).toBe(expectedGrade);
 });
  it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'D';
   expect(grader.letterGrade(65)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'F';
   expect(grader.letterGrade(50)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'F';
   expect(grader.letterGrade(15)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = 'F';
   expect(grader.letterGrade(0)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = false;
   expect(grader.letterGrade(151)).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = false;
   expect(grader.letterGrade('string')).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = false;
   expect(grader.letterGrade({})).toBe(expectedGrade);
 });
 it("Function letterGrader returns proper letter grade", function() {
   var expectedGrade = false;
   expect(grader.letterGrade([])).toBe(expectedGrade);
 });
});
describe('average', function() {
 it("Function returns average Grade from an array", function() {
   var expectedAvg = 75;
   expect(grader.averageGrade([80, 75, 70])).toBe(expectedAvg);
 });
 it("Function returns average Grade from an array", function() {
   var expectedAvg = false;
   expect(grader.averageGrade(['Michael', 15, "Hakase"])).toBe(expectedAvg);
 });
 it("Function returns average Grade from an array", function() {
   var expectedAvg = false;
   expect(grader.averageGrade(95)).toBe(expectedAvg);
 });
});
describe('median', function() {
 it("Function returns median Grade from an array", function() {
   var expectedMedian = 35;
   expect(grader.medianGrade([39, 36, 34, 30])).toBe(expectedMedian);
 });
 it("Function returns median Grade from an array", function() {
   var expectedMedian = 65;
   expect(grader.medianGrade([69, 65, 60])).toBe(expectedMedian);
 });
 it("Function returns median Grade from an array", function() {
   var expectedMedian = false;
   expect(grader.medianGrade(['What?', 95, 90])).toBe(expectedMedian);
 });
 it("Function returns median Grade from an array", function() {
   var expectedMedian = false;
   expect(grader.medianGrade(95)).toBe(expectedMedian);
 });
 });
describe('mode', function() {
 it("Function returns mode Grade from an array", function() {
   var expectedMd = 16;
   expect(grader.modeGrade([19, 16, 16, 14, 10])).toBe(expectedMd);
 });
 it("Function returns mode Grade from an array", function() {
   var expectedMd = 54;
   expect(grader.modeGrade([59, 56, 56, 54, 54, 50])).toBe(expectedMd);
 });
 it("Function returns mode Grade from an array", function() {
   var expectedMd = false;
   expect(grader.modeGrade('Salt Test')).toBe(expectedMd);
 });
 it("Function returns mode Grade from an array", function() {
   var expectedMd = 74;
   expect(grader.modeGrade([79, 76, '76', 74, 74, 70])).toBe(expectedMd);
 });
 it("Function returns mode Grade from an array", function() {
   var expectedMd = false;
   expect(grader.modeGrade(42)).toBe(expectedMd);
 });
});