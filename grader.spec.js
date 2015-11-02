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