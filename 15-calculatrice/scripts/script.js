let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (event) => {
  // Empêche l'envoie du formulaire
  event.preventDefault();

  const formData = new FormData(form);
  let input = document.getElementsByTagName("input")[0].value;
  try {
    for (let i = 0; i < input.length; i++) {
      if (isLetter(input.charAt(i)) && !isSymbol(input.charAt(i))) {
        input =
          input.substring(0, i) +
          Math.floor(Math.random() * 10) +
          input.substring(i + 1);
        console.log(input);
      }
    }

    alert(input + " = " + eval(input));
  } catch (error) {
    console.error(error);
  }
});

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function isSymbol(c) {
  return c == "+" || c == "*" || c == "/" || c == "-";
}
