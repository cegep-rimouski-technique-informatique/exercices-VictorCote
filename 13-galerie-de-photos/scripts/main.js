const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Déclarer une liste avec les chemins des images*/
/* Déclarer le texte alternative pour chaque image*/

const imgs = [
  {
    src: "../images/pic1.jpg",
    alt: "1",
  },
  {
    src: "../images/pic2.jpg",
    alt: "2",
  },
  {
    src: "../images/pic3.jpg",
    alt: "3",
  },
  {
    src: "../images/pic4.jpg",
    alt: "4",
  },
  {
    src: "../images/pic5.jpg",
    alt: "5",
  },
];

/* traverser les images */
imgs.forEach((img) => {
  let newImage = document.createElement("img");
  newImage.setAttribute("src", img.src);
  newImage.setAttribute("alt", img.alt);
  newImage.addEventListener("click", async function setDisplayImg() {
    displayedImage.alt = this.alt;
    await new Promise((r) => setTimeout(r, 250));
    displayedImage.src = this.src;
  });
  newImage.addEventListener("click", removeFromThumbBar);
  thumbBar.appendChild(newImage);
});
removeFromThumbBar();

/* sombre/clair bouton */

btn.addEventListener("click", darkenLighten);

function darkenLighten() {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.setAttribute("style", "background-color: rgba(0,0,0,0.5)");
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.setAttribute("style", "background-color: rgba(0,0,0,0)");
  }
}

function removeFromThumbBar() {
  let thumbNails = thumbBar.childNodes;
  thumbNails.forEach(async (thumbNail) => {
    if (thumbNail.alt === displayedImage.alt) {
      thumbNail.setAttribute("style", "width: 0%;");
    } else {
      thumbNail.setAttribute("style", "width: 20%;");
      displayedImage.setAttribute("style", "opacity: 0%;");
      await new Promise((r) => setTimeout(r, 250));
      displayedImage.setAttribute("style", "opacity: 100%");
    }
  });
}
