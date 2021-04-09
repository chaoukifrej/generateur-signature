/* Creation des variables */

//formulaire principal
const PRENOM = document.getElementById("prenom");
const NOM = document.getElementById("nom");
const POSTE = document.getElementById("poste");
const ENTREPRISE = document.getElementById("entreprise");
const TELEPHONE = document.getElementById("telephone");
const EMAIL = document.getElementById("email");
const SITEWEB = document.getElementById("siteWeb");
const ADRESSE = document.getElementById("adresse");

//formulaire secondaire
const LINKEDIN = document.getElementById("linkedin");
const FACEBOOK = document.getElementById("facebook");
const TWITTER = document.getElementById("twitter");
const INSTAGRAM = document.getElementById("instagram");

//Signature principal

const PRENOMS = document.getElementById("prenomS");
const NOMS = document.getElementById("nomS");
const POSTES = document.getElementById("posteS");
const ENTREPRISES = document.getElementById("entrepriseS");
const TELEPHONES = document.getElementById("telephoneS");
const EMAILS = document.getElementById("emailS");
const SITEWEBS = document.getElementById("siteWebS");
const ADRESSES = document.getElementById("adresseS");

//Signature secondaire
const LINKEDINS = document.getElementById("linkedinS");
const FACEBOOKS = document.getElementById("facebookS");
const TWITTERS = document.getElementById("twitterS");
const INSTAGRAMS = document.getElementById("instagramS");

//Menu & Evenement Click
const BTN1 = document.getElementById("btnForm1");
const FORM1 = document.getElementById("form1");
const FORM2 = document.getElementById("form2");

const BTNFORMTAB = document.querySelectorAll(".formulaireMenu li");
const FORMTAB = document.getElementsByClassName("formTab");

//Styles

const ITHEME = document.getElementById("inputTheme");
const PTHEME = document.getElementById("paletteTheme");
const ITEXTE = document.getElementById("inputTexte");
const PTEXTE = document.getElementById("paletteTexte");
const ILIEN = document.getElementById("inputLien");
const PLIEN = document.getElementById("paletteLien");

const TPOLICE = document.getElementById("taillePolice");
const POLICE = document.getElementById("policeType");

//Photo Profil

const PHOTO = document.getElementById("photoProfil");
const PHOTOS = document.getElementById("photoProfilS");

//Signature creation
const CREATESIGN = document.getElementById("creerSignature");
const TABLESIGN = document.getElementById("tableSignature");
const SIGNCREER = document.getElementById("signCreer");
//-----------

//CREATION DE LA SIGNATURE
CREATESIGN.addEventListener("click", function (e) {
  SIGNCREER.classList.toggle("displayNone");
  let signHTML = TABLESIGN.innerHTML;
  divS = document.createElement("div");
  divS.innerText = signHTML;
  SIGNCREER.appendChild(divS);
});

/* Changement du type de formulaire avec Menu*/
FORM2.classList.add("displayNone"); //Amodif si besoin de modif styleContainer
BTN1.classList.add("liActive");
for (let i = 0; i < BTNFORMTAB.length; i++) {
  const BTN = BTNFORMTAB[i];
  const FORM = FORMTAB[i];
  BTN.addEventListener("click", function (e) {
    for (let j = 0; j < FORMTAB.length; j++) {
      FORMTAB[j].classList.add("displayNone");
      BTNFORMTAB[j].classList.remove("liActive");
    }
    FORM.classList.remove("displayNone");
    BTN.classList.add("liActive");
  });
}

/* Listener pour chaque input */
//input principal
PRENOM.addEventListener("input", function (e) {
  verification();
  let valeur = this.value;
  PRENOMS.innerText = valeur;
});
NOM.addEventListener("input", function (e) {
  verification();
  let valeur = this.value;
  NOMS.innerText = valeur;
});
POSTE.addEventListener("input", function (e) {
  verification();
  let valeur = this.value;
  POSTES.innerText = valeur;
});
ENTREPRISE.addEventListener("input", function (e) {
  verification();
  let valeur = this.value;
  ENTREPRISES.innerText = valeur;
});
TELEPHONE.addEventListener("input", function (e) {
  verification();
  let valeur = this.value;
  let phone;
  if (valeur.length == 10) {
    phone = `${valeur[0]}${valeur[1]} ${valeur[2]}${valeur[3]} ${valeur[4]}${valeur[5]} ${valeur[6]}${valeur[7]} ${valeur[8]}${valeur[9]}`;
  } else if (valeur.length == 13) {
    phone = `+${valeur[2]}${valeur[3]} ${valeur[4]} ${valeur[5]}${valeur[6]} ${valeur[7]}${valeur[8]} ${valeur[9]}${valeur[10]} ${valeur[11]}${valeur[12]}`;
  } else {
    phone = valeur;
  }
  TELEPHONES.innerText = phone;
  TELEPHONES.href = "tel:" + valeur;
});
EMAIL.addEventListener("input", function (e) {
  verification();
  let valeur = this.value;
  EMAILS.innerText = valeur;
  EMAILS.href = "mailto:" + valeur;
});
SITEWEB.addEventListener("input", function (e) {
  verification();
  let valeur = this.value;
  SITEWEBS.innerText = valeur;
  SITEWEBS.href = "http://" + valeur;
});
ADRESSE.addEventListener("input", function (e) {
  verification();
  let valeur = this.value;
  ADRESSES.innerText = valeur;
  ADRESSES.href = "https://maps.google.com/?q=" + valeur;
});
//input secondaire
LINKEDIN.addEventListener("change", function (e) {
  verification();
  let valeur = this.value;
  LINKEDINS.href = valeur;
  LINKEDINS.style.display = "unset";
  while (valeur == "") {
    LINKEDINS.style.display = "none";
    break;
  }
});
FACEBOOK.addEventListener("change", function (e) {
  verification();
  let valeur = this.value;
  FACEBOOKS.href = valeur;
  FACEBOOKS.style.display = "unset";
  while (valeur == "") {
    FACEBOOKS.style.display = "none";
    break;
  }
});
TWITTER.addEventListener("change", function (e) {
  verification();
  let valeur = this.value;
  TWITTERS.href = valeur;
  TWITTERS.style.display = "unset";
  while (valeur == "") {
    TWITTERS.style.display = "none";
    break;
  }
});
INSTAGRAM.addEventListener("change", function (e) {
  verification();
  let valeur = this.value;
  INSTAGRAMS.href = valeur;
  INSTAGRAMS.style.display = "unset";
  while (valeur == "") {
    INSTAGRAMS.style.display = "none";
    break;
  }
});

//Listener pour chaque style
ITHEME.value = PTHEME.value;
ITEXTE.value = PTEXTE.value;
ILIEN.value = PLIEN.value;

//style texte principal
PTHEME.addEventListener("input", function (e) {
  let valeur = this.value;
  ITHEME.value = valeur;
  PRENOMS.style.color = valeur;
  NOMS.style.color = valeur;
});
ITHEME.addEventListener("change", function (e) {
  let valeur = this.value;
  let vModif;
  if (valeur.length == 7 && valeur[0] == "#") {
    PTHEME.value = valeur;
  } else if (valeur.length == 6) {
    valeur = `#${valeur}`;
    PTHEME.value = valeur;
  } else if (valeur.length == 4 && valeur[0] == "#") {
    vModif = `${valeur[0]}${valeur[1]}${valeur[2]}${valeur[3]}${valeur[1]}${valeur[2]}${valeur[3]}`;
    PTHEME.value = vModif;
  } else if (valeur.length == 3 && valeur[0] != "#") {
    vModif = `#${valeur[0]}${valeur[1]}${valeur[2]}${valeur[0]}${valeur[1]}${valeur[2]}`;
    PTHEME.value = vModif;
    valeur = `#${valeur}`;
  } else if (valeur.length == 3 && valeur[0] == "#") {
    vModif = `${valeur[0]}${valeur[1]}${valeur[2]}${valeur[1]}${valeur[2]}${valeur[1]}${valeur[2]}`;
    PTHEME.value = vModif;
    valeur = `${valeur[0]}${valeur[1]}${valeur[2]}${valeur[1]}${valeur[2]}${valeur[1]}${valeur[2]}`;
  } else if (valeur.length == 2 && valeur[0] != "#") {
    vModif = `#${valeur[0]}${valeur[1]}${valeur[0]}${valeur[1]}${valeur[0]}${valeur[1]}`;
    PTHEME.value = vModif;
    valeur = vModif;
  }
  PRENOMS.style.color = valeur;
  NOMS.style.color = valeur;
});
//style texte secondaire
PTEXTE.addEventListener("input", function (e) {
  let valeur = this.value;
  ITEXTE.value = valeur;
  POSTES.style.color = valeur;
  ENTREPRISES.style.color = valeur;
});
ITEXTE.addEventListener("change", function (e) {
  let valeur = this.value;
  let vModif;
  if (valeur.length == 7 && valeur[0] == "#") {
    PTEXTE.value = valeur;
  } else if (valeur.length == 6) {
    valeur = `#${valeur}`;
    PTEXTE.value = valeur;
  } else if (valeur.length == 4 && valeur[0] == "#") {
    vModif = `${valeur[0]}${valeur[1]}${valeur[2]}${valeur[3]}${valeur[1]}${valeur[2]}${valeur[3]}`;
    PTEXTE.value = vModif;
  } else if (valeur.length == 3 && valeur[0] != "#") {
    vModif = `#${valeur[0]}${valeur[1]}${valeur[2]}${valeur[0]}${valeur[1]}${valeur[2]}`;
    PTEXTE.value = vModif;
    valeur = `#${valeur}`;
  } else if (valeur.length == 3 && valeur[0] == "#") {
    vModif = `${valeur[0]}${valeur[1]}${valeur[2]}${valeur[1]}${valeur[2]}${valeur[1]}${valeur[2]}`;
    PTEXTE.value = vModif;
    valeur = `${valeur[0]}${valeur[1]}${valeur[2]}${valeur[1]}${valeur[2]}${valeur[1]}${valeur[2]}`;
  } else if (valeur.length == 2 && valeur[0] != "#") {
    vModif = `#${valeur[0]}${valeur[1]}${valeur[0]}${valeur[1]}${valeur[0]}${valeur[1]}`;
    PTEXTE.value = vModif;
    valeur = vModif;
  }
  POSTES.style.color = valeur;
  ENTREPRISES.style.color = valeur;
});

//style lien
PLIEN.addEventListener("input", function (e) {
  let valeur = this.value;
  ILIEN.value = valeur;
  TELEPHONES.style.color = valeur;
  EMAILS.style.color = valeur;
  SITEWEBS.style.color = valeur;
  ADRESSES.style.color = valeur;
});
ILIEN.addEventListener("change", function (e) {
  let valeur = this.value;
  let vModif;
  if (valeur.length == 7 && valeur[0] == "#") {
    PLIEN.value = valeur;
  } else if (valeur.length == 6) {
    valeur = `#${valeur}`;
    PLIEN.value = valeur;
  } else if (valeur.length == 4 && valeur[0] == "#") {
    vModif = `${valeur[0]}${valeur[1]}${valeur[2]}${valeur[3]}${valeur[1]}${valeur[2]}${valeur[3]}`;
    PLIEN.value = vModif;
  } else if (valeur.length == 3 && valeur[0] != "#") {
    vModif = `#${valeur[0]}${valeur[1]}${valeur[2]}${valeur[0]}${valeur[1]}${valeur[2]}`;
    PLIEN.value = vModif;
    valeur = `#${valeur}`;
  } else if (valeur.length == 3 && valeur[0] == "#") {
    vModif = `${valeur[0]}${valeur[1]}${valeur[2]}${valeur[1]}${valeur[2]}${valeur[1]}${valeur[2]}`;
    PLIEN.value = vModif;
    valeur = `${valeur[0]}${valeur[1]}${valeur[2]}${valeur[1]}${valeur[2]}${valeur[1]}${valeur[2]}`;
  } else if (valeur.length == 2 && valeur[0] != "#") {
    vModif = `#${valeur[0]}${valeur[1]}${valeur[0]}${valeur[1]}${valeur[0]}${valeur[1]}`;
    PLIEN.value = vModif;
    valeur = vModif;
  }
  TELEPHONES.style.color = valeur;
  EMAILS.style.color = valeur;
  SITEWEBS.style.color = valeur;
  ADRESSES.style.color = valeur;
});

//listener sur police
POLICE.addEventListener("change", function (e) {
  let valeur = this.value;
  if (valeur == "opensans") {
    PRENOMS.style.fontFamily = "'Open Sans', sans-serif";
    NOMS.style.fontFamily = "'Open Sans', sans-serif";
    POSTES.style.fontFamily = "'Open Sans', sans-serif";
    ENTREPRISES.style.fontFamily = "'Open Sans', sans-serif";
    TELEPHONES.style.fontFamily = "'Open Sans', sans-serif";
    EMAILS.style.fontFamily = "'Open Sans', sans-serif";
    SITEWEBS.style.fontFamily = "'Open Sans', sans-serif";
    ADRESSES.style.fontFamily = "'Open Sans', sans-serif";
  } else if (valeur == "arial") {
    PRENOMS.style.fontFamily = "Arial, Helvetica, sans-serif";
    NOMS.style.fontFamily = "Arial, Helvetica, sans-serif";
    POSTES.style.fontFamily = "Arial, Helvetica, sans-serif";
    ENTREPRISES.style.fontFamily = "Arial, Helvetica, sans-serif";
    TELEPHONES.style.fontFamily = "Arial, Helvetica, sans-serif";
    EMAILS.style.fontFamily = "Arial, Helvetica, sans-serif";
    SITEWEBS.style.fontFamily = "Arial, Helvetica, sans-serif";
    ADRESSES.style.fontFamily = "Arial, Helvetica, sans-serif";
  } else if (valeur == "poppins") {
    PRENOMS.style.fontFamily = "'Poppins', sans-serif";
    NOMS.style.fontFamily = "'Poppins', sans-serif";
    POSTES.style.fontFamily = "'Poppins', sans-serif";
    ENTREPRISES.style.fontFamily = "'Poppins', sans-serif";
    TELEPHONES.style.fontFamily = "'Poppins', sans-serif";
    EMAILS.style.fontFamily = "'Poppins', sans-serif";
    SITEWEBS.style.fontFamily = "'Poppins', sans-serif";
    ADRESSES.style.fontFamily = "'Poppins', sans-serif";
  } else if (valeur == "roboto") {
    PRENOMS.style.fontFamily = "'Roboto', sans-serif";
    NOMS.style.fontFamily = "'Roboto', sans-serif";
    POSTES.style.fontFamily = "'Roboto', sans-serif";
    ENTREPRISES.style.fontFamily = "'Roboto', sans-serif";
    TELEPHONES.style.fontFamily = "'Roboto', sans-serif";
    EMAILS.style.fontFamily = "'Roboto', sans-serif";
    SITEWEBS.style.fontFamily = "'Roboto', sans-serif";
    ADRESSES.style.fontFamily = "'Roboto', sans-serif";
  } else if (valeur == "lato") {
    PRENOMS.style.fontFamily = "'Lato', sans-serif";
    NOMS.style.fontFamily = "'Lato', sans-serif";
    POSTES.style.fontFamily = "'Lato', sans-serif";
    ENTREPRISES.style.fontFamily = "'Lato', sans-serif";
    TELEPHONES.style.fontFamily = "'Lato', sans-serif";
    EMAILS.style.fontFamily = "'Lato', sans-serif";
    SITEWEBS.style.fontFamily = "'Lato', sans-serif";
    ADRESSES.style.fontFamily = "'Lato', sans-serif";
  } else if (valeur == "nunito") {
    PRENOMS.style.fontFamily = "'Nunito', sans-serif";
    NOMS.style.fontFamily = "'Nunito', sans-serif";
    POSTES.style.fontFamily = "'Nunito', sans-serif";
    ENTREPRISES.style.fontFamily = "'Nunito', sans-serif";
    TELEPHONES.style.fontFamily = "'Nunito', sans-serif";
    EMAILS.style.fontFamily = "'Nunito', sans-serif";
    SITEWEBS.style.fontFamily = "'Nunito', sans-serif";
    ADRESSES.style.fontFamily = "'Nunito', sans-serif";
  } else {
    PRENOMS.style.fontFamily = "unset";
  }
});

//Listener taille de police

TPOLICE.addEventListener("input", function (e) {
  let valeur = this.value;
  let big = "1.1rem";
  let medium = "0.9rem";
  let small = "0.8rem";
  if (valeur == 3) {
    PHOTOS.style.height = "200px";
    PRENOMS.style.fontSize = "1.2rem";
    NOMS.style.fontSize = "1.2rem";
    POSTES.style.fontSize = big;
    ENTREPRISES.style.fontSize = big;
    TELEPHONES.style.fontSize = big;
    EMAILS.style.fontSize = big;
    SITEWEBS.style.fontSize = big;
    ADRESSES.style.fontSize = big;
  } else if (valeur == 2) {
    PHOTOS.style.height = "180px";
    PRENOMS.style.fontSize = "1rem";
    NOMS.style.fontSize = "1rem";
    POSTES.style.fontSize = medium;
    ENTREPRISES.style.fontSize = medium;
    TELEPHONES.style.fontSize = medium;
    EMAILS.style.fontSize = medium;
    SITEWEBS.style.fontSize = medium;
    ADRESSES.style.fontSize = medium;
  } else if (valeur == 1) {
    PHOTOS.style.height = "170px";
    PRENOMS.style.fontSize = "0.9rem";
    NOMS.style.fontSize = "0.9rem";
    POSTES.style.fontSize = small;
    ENTREPRISES.style.fontSize = small;
    TELEPHONES.style.fontSize = small;
    EMAILS.style.fontSize = small;
    SITEWEBS.style.fontSize = small;
    ADRESSES.style.fontSize = small;
  }
});

//Listener sur photo profil
PHOTO.addEventListener("focus", function (e) {
  let valeur = this.value;
  if (valeur != "") {
    PHOTO.select();
  }
});

PHOTO.addEventListener("change", function (e) {
  let valeur = this.value;
  PHOTOS.src = valeur;
});

//FONCTION AFFICHAGE SIGNATURE ET VERIFICATION
PRENOMS.innerText = "Jean";
NOMS.innerText = "Dupont";
POSTES.innerText = "Développeur Web";
ENTREPRISES.innerText = "Le Bocal Academy";
TELEPHONES.innerText = "07 41 77 89 36";
EMAILS.innerText = "jd@lebocal.fr";
SITEWEBS.innerText = "http://www.lebocal.fr";
ADRESSES.innerText = "26 Rue Carabacel 06000 NICE";
PHOTOS.src =
  "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829213?k=6&m=530829213&s=170667a&w=0&h=D5Qm3KHxprqZSgCOESaQPAzBWOzIGucjjgnM_kU7qUU=";
function verification() {
  if (
    PRENOM.value == "" &&
    NOM.value == "" &&
    POSTE.value == "" &&
    ENTREPRISE.value == "" &&
    TELEPHONE.value == "" &&
    EMAIL.value == "" &&
    SITEWEB.value == "" &&
    ADRESSE.value == "" &&
    LINKEDIN.value == "" &&
    FACEBOOK.value == "" &&
    TWITTER.value == "" &&
    INSTAGRAM.value == ""
  ) {
    PRENOMS.innerText = "Jean";
    NOMS.innerText = "Dupont";
    POSTES.innerText = "Développeur Web";
    ENTREPRISES.innerText = "Le Bocal Academy";
    TELEPHONES.innerText = "07 41 77 89 36";
    EMAILS.innerText = "jd@lebocal.fr";
    SITEWEBS.innerText = "http://www.lebocal.fr";
    ADRESSES.innerText = "26 Rue Carabacel 06000 NICE";
    PHOTOS.src =
      "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829213?k=6&m=530829213&s=170667a&w=0&h=D5Qm3KHxprqZSgCOESaQPAzBWOzIGucjjgnM_kU7qUU=";
    LINKEDINS.style.display = "unset";
    FACEBOOKS.style.display = "unset";
    TWITTERS.style.display = "unset";
    INSTAGRAMS.style.display = "unset";
  } else {
    PRENOMS.innerText = PRENOM.value;
    NOMS.innerText = NOM.value;
    POSTES.innerText = POSTE.value;
    ENTREPRISES.innerText = ENTREPRISE.value;
    TELEPHONES.innerText = TELEPHONE.value;
    EMAILS.innerText = EMAIL.value;
    SITEWEBS.innerText = SITEWEB.value;
    ADRESSES.innerText = ADRESSE.value;
    PHOTOS.src = PHOTO.value;
    while (LINKEDIN.value == "") {
      LINKEDINS.style.display = "none";
      break;
    }
    while (FACEBOOK.value == "") {
      FACEBOOKS.style.display = "none";
      break;
    }
    while (TWITTER.value == "") {
      TWITTERS.style.display = "none";
      break;
    }
    while (INSTAGRAM.value == "") {
      INSTAGRAMS.style.display = "none";
      break;
    }
  }
}
