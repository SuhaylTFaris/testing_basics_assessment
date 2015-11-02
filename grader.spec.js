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
});