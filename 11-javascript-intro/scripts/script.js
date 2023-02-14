fizzBuzz();
estUnPalindrome();
numberOfDaysBetween2Dates();

function estUnPalindrome() {
  let mot = prompt("votre mot");
  let bool = true;
  for (let i = 0; i <= Math.floor(mot.length / 2); i++) {
    if (mot.charAt(i) != mot.charAt(mot.length - i - 1)) {
      bool = false;
    }
  }
  alert(bool);
}

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let result = "";
    if (i % 3 === 0) {
      result = result + "Fizz";
    }
    if (i % 5 === 0) {
      result = result + "Buzz";
    }
    if (i % 3 != 0 && i % 5 != 0) {
      result = i;
    }
    console.log(result);
  }
}

function numberOfDaysBetween2Dates() {
  const date1 = new Date("March 2, 1997");
  const date2 = new Date("Febuary 7, 2023");
  console.log((date2 - date1) / 1000 / 60 / 60 / 24 + " jours");
}
