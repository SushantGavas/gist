/*
Write a program in JS that prints numbers 1 to 100.
  For every multiple of 3, print "Earth".
  For every multiple of 5, print "Jupiter".
  For every multiple of 9, print "Pluto".
*/
 
// main logic
const printNumber = num => {
  let str = '';
  num % 5 === 0 ? str = 'Jupiter' :
    num % 9 === 0 ? str = 'Pluto' :
      num % 3 === 0 ? str = 'Earth' :
        str = num;
  return str;
};
 
// print the data
for (let i = 1; i <= 100; i++) {
  console.log(printNumber(i));
}
