// 28. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let counter = 0; counter <= 100; counter++) {
  var notPrime = false;
  for (let i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    console.log(counter);
  }
}
