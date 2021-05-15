function hKerulet() {
  var haromszogA = parseInt(document.getElementById("hA").value);
  var haromszogB = parseInt(document.getElementById("hB").value);
  var haromszogC = parseInt(document.getElementById("hC").value);
  var haromszogK;

  if (haromszogA <= 0 || haromszogB <= 0 || haromszogC <= 0) {
    document.getElementById("hK").style.borderColor = "red";
    document.getElementById("hK").value = "Érvénytelen adat!";
  } else {
    document.getElementById("hK").style.borderColor = "black";
    haromszogK = haromszogA + haromszogB + haromszogC;
    document.getElementById("hK").value = haromszogK;
  }
  if (isNaN(haromszogK) && document.getElementById("hK").value !== "Érvénytelen adat!" ){

    document.getElementById("hK").value = "Nem elegendő adat!";
  }
  if(haromszogA+haromszogB<haromszogC || haromszogB+haromszogC<haromszogA || haromszogA+haromszogC<haromszogB){
    alert("Két oldal összege nem lehet kisebb, mint a harmadik oldal!");
    document.getElementById("hK").style.borderColor = "red";
    document.getElementById("hK").value = "Érvénytelen adat!";
}
}
function hTerulet() {
  var haromszogA = parseInt(document.getElementById("hA").value);
  var haromszogMa = parseInt(document.getElementById("hMa").value);
  var haromszogTerulet;
  if (haromszogA <= 0 || haromszogMa <= 0) {
    document.getElementById("hT").style.borderColor = "red";
    document.getElementById("hT").value = "Érvénytelen adat!";
  } else {
    document.getElementById("hT").style.borderColor = "black";
    haromszogTerulet = (haromszogA * haromszogMa) / 2;
    document.getElementById("hT").value = haromszogTerulet;
  }
  if (isNaN(haromszogTerulet) && document.getElementById("hT").value !== "Érvénytelen adat!" ){

    document.getElementById("hT").value = "Nem elegendő adat!";
  }
}

function tKerulet() {
  var teglalapA = parseInt(document.getElementById("tA").value);
  var teglalapB = parseInt(document.getElementById("tB").value);
  var teglalapKerulet;
  if (teglalapA <= 0 || teglalapB <= 0) {
    document.getElementById("tK").style.borderColor = "red";
    document.getElementById("tK").value = "Érvénytelen adat!";
  } else {
    document.getElementById("tK").style.borderColor = "black";
    teglalapKerulet = (teglalapA + teglalapB) * 2;
    document.getElementById("tK").value = teglalapKerulet.toLocaleString();
  }
  if (isNaN(teglalapKerulet) && document.getElementById("tK").value !== "Érvénytelen adat!" ){

    document.getElementById("tK").value = "Nem elegendő adat!";
  }
}

function tTerulet() {
  var teglalapA = parseInt(document.getElementById("tA").value);
  var teglalapB = parseInt(document.getElementById("tB").value);
  var teglalapTerulet;
  if (teglalapA <= 0 || teglalapB <= 0) {
    document.getElementById("tT").style.borderColor = "red";
    document.getElementById("tT").value = "Érvénytelen adat!";
  } else {
    document.getElementById("tT").style.borderColor = "black";
    teglalapTerulet = teglalapA * teglalapB;
    document.getElementById("tT").value = teglalapTerulet.toLocaleString();
  }
  if (isNaN(teglalapTerulet) && document.getElementById("tT").value !== "Érvénytelen adat!" ){

    document.getElementById("tT").value = "Nem elegendő adat!";
  }
}

function heFelszin() {
  var hengerSugar = parseInt(document.getElementById("heS").value);
  var hengerMagassag = parseInt(document.getElementById("heMa").value);
var hengerFelszin;
  if (hengerSugar <= 0 || hengerMagassag <= 0) {
    document.getElementById("heF").style.borderColor = "red";
    document.getElementById("heF").value = "Érvénytelen adat!";
  } else {
    document.getElementById("heF").style.borderColor = "black";
     hengerFelszin =
      2 * Math.PI * hengerSugar * (hengerSugar + hengerMagassag);
    hengerFelszin = hengerFelszin.toFixed(2);
    document.getElementById("heF").value = hengerFelszin;
  }
  if (isNaN(hengerFelszin) && document.getElementById("heF").value !== "Érvénytelen adat!" ){

    document.getElementById("heF").value = "Nem elegendő adat!";
  }
}

function heTerfogat() {
  var hengerSugar = parseInt(document.getElementById("heS").value);
  var hengerMagassag = parseInt(document.getElementById("heMa").value);
var hengerTerfogat;
  if (hengerSugar <= 0 || hengerMagassag <= 0) {
    document.getElementById("heT").style.borderColor = "red";
    document.getElementById("heT").value = "Érvénytelen adat!";
  } else {
    document.getElementById("heT").style.borderColor = "black";
    hengerTerfogat = Math.PI * hengerSugar * hengerSugar * hengerMagassag;
    hengerTerfogat = hengerTerfogat.toFixed(2);
    document.getElementById("heT").value = hengerTerfogat;
  }
  if (isNaN(hengerTerfogat) && document.getElementById("heT").value !== "Érvénytelen adat!" ){

    document.getElementById("heT").value = "Nem elegendő adat!";
  }
}

function koFelszin() {
  var kockaA = parseInt(document.getElementById("koA").value);
var kockaFelszin;
  if (kockaA <= 0) {
    document.getElementById("koF").style.borderColor = "red";
    document.getElementById("koF").value = "Érvénytelen adat!";
  } else {
    document.getElementById("koF").style.borderColor = "black";
    kockaFelszin = 6 * kockaA * kockaA;
    document.getElementById("koF").value = kockaFelszin;
  }
}

function koTerfogat() {
  var kockaA = parseInt(document.getElementById("koA").value);
var kockaTerfogat;
  if (kockaA <= 0) {
    document.getElementById("koT").style.borderColor = "red";
    document.getElementById("koT").value = "Érvénytelen adat!";
  } else {
    document.getElementById("koT").style.borderColor = "black";
    kockaTerfogat = kockaA * kockaA * kockaA;
    document.getElementById("koT").value = kockaTerfogat;
  }
}
