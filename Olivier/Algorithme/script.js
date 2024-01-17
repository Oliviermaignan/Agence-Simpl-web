function calculsurface(cote, unite) {
    if (unite == "km") {
      cote = cote*1000;
    }
    if (unite == "cm") {
      cote = cote/100;
    }
    if (unite == "mm") {
      cote = cote/1000;
    }

    let surface = cote*cote;
    return surface + " m²";
  }

function CalculSurface(cote, unite) {
    if (unite == "cm") {
      cote = cote/100;
    }
    if (unite == "km") {
      cote = cote*1000;
    }
    if (unite == "mm") {
      cote = cote/1000;
    }
  
    let surface = cote*cote;
    return surface + " m²";
  }
  
  let unite = prompt("Quelle est l'unité à utiliser ?", "");
  let cote = prompt("Quelle est la longueur du coté ?", "");
  
  let resultat = CalculSurface(cote, unite);
  alert(resultat);