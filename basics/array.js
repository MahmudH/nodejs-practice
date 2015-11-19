var grades = [50, 100, 200];

grades.push(50);

var totalGrades = 0;

grades.forEach(function (grade) {
  totalGrades += grade;
});

var average = totalGrades / grades.length;

console.log('the average is ' + average);

/*console.log('there are ' + grades.length + ' items in the array');

grades.forEach(function (grade) {
  console.log(grade);
});
*/
