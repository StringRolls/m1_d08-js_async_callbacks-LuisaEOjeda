//Exercise 1: What is the expected output? And why?

function print() {
  console.log(1);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(3), 0);
  console.log(4);
}

//print(); /// 1 4 3 2

// ------------------------------------------------------------------------

//Exercise 2: Write a function blast() , which loops over the numbers 1 to 15. every 1 second

function blast() {
  for (let i = 1; i <= 15; i++) {
    setTimeout(
      
      () => {
      //console.log(i)

      if (i % 3 === 0) {
        console.log("BOOM!");
      }

      else if (i % 5 === 0) {
        console.log("BANG!");
      } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("BOOM BANG!!");
      }
      else {
        console.log(i)
      }
    },
    (i * 1000));
  }
}

blast();

// - For every number divisible by 3 it prints BOOM!!
// - For every number divisible by 5 it prints a BANG!!
// - Forevery number divisible for 3 and 5 it prints BOOM BANG!!
