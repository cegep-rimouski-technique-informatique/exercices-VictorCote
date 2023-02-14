// 1. Dessinez le modèle par arborescence du DOM (Document Object Model) de index.html

// Éxecuter le Javascript après la création du DOM
window.onload = () => {
  // 2. Remplacez le texte du titre par "DOMaine des Arbres"
  document.getElementById("titre").textContent = "DOmaine des Arbres";

  // 3. Changez l'ordre de présentation des images avec flex
  const elem = document
    .getElementsByClassName("container")[0]
    .setAttribute("style", "display: flex;flex-direction: row;");

  // 4. Ajoutez le point "Terre" à la liste d'éléments
  document
    .getElementsByTagName("ul")[0]
    .appendChild(
      document.createElement("li").appendChild(document.createTextNode("Terre"))
    );

  // 5. Ajoutez l'attribut href manquant à la balise lien de l'image d'arbre.
  // avec la valeur  href="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
  // Avec le sélecteur suivant, utilisez un "accès par relation" pour faire votre modification.
  const imageSansLien = document
    .querySelectorAll(
      'img[src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"]'
    )[0]
    .setAttribute(
      "href",
      "https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
    );

  // 6. Modifiez la police du texte pour toutes les éléments de la liste
  document
    .getElementsByTagName("ul")[0]
    .setAttribute("style", "font-family: 'Courier New', Courier, monospace;");
};
