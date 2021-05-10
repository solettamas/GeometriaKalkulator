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
}
function hTerulet() {
  var haromszogA = parseInt(document.getElementById("hA").value);
  var haromszogMa = parseInt(document.getElementById("hMa").value);
  var haromszogTerulet;
  if (haromszogA <= 0 || haromszogMa <= 0) {
    document.getElementById("hT").style.borderColor = "red";
    document.getElementById("hT").value = "Érvénytelen adat!";
  } else {
    document.getElementById("hK").style.borderColor = "black";
    haromszogTerulet = (haromszogA * haromszogMa) / 2;
    document.getElementById("hT").value = haromszogTerulet;
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
}

function heFelszin() {
  var hengerSugar = parseInt(document.getElementById("heS").value);
  var hengerMagassag = parseInt(document.getElementById("heMa").value);

  if (hengerSugar <= 0 || hengerMagassag <= 0) {
    document.getElementById("heF").style.borderColor = "red";
    document.getElementById("heF").value = "Érvénytelen adat!";
  } else {
    document.getElementById("heF").style.borderColor = "black";
    var hengerFelszin =
      2 * Math.PI * hengerSugar * (hengerSugar + hengerMagassag);
    hengerFelszin = hengerFelszin.toFixed(2);
    document.getElementById("heF").value = hengerFelszin;
  }
}

function heTerfogat() {
  var hengerSugar = parseInt(document.getElementById("heS").value);
  var hengerMagassag = parseInt(document.getElementById("heMa").value);

  if (hengerSugar <= 0 || hengerMagassag <= 0) {
    document.getElementById("heT").style.borderColor = "red";
    document.getElementById("heT").value = "Érvénytelen adat!";
  } else {
    document.getElementById("heT").style.borderColor = "black";
    var hengerTerfogat = Math.PI * hengerSugar * hengerSugar * hengerMagassag;
    hengerTerfogat = hengerTerfogat.toFixed(2);
    document.getElementById("heT").value = hengerTerfogat;
  }
}

function koFelszin() {
  var kockaA = parseInt(document.getElementById("koA").value);

  if (kockaA <= 0) {
    document.getElementById("koF").style.borderColor = "red";
    document.getElementById("koF").value = "Érvénytelen adat!";
  } else {
    document.getElementById("koF").style.borderColor = "black";
    var kockaFelszin = 6 * kockaA * kockaA;
    document.getElementById("koF").value = kockaFelszin;
  }
}

function koTerfogat() {
  var kockaA = parseInt(document.getElementById("koA").value);

  if (kockaA <= 0) {
    document.getElementById("koT").style.borderColor = "red";
    document.getElementById("koT").value = "Érvénytelen adat!";
  } else {
    document.getElementById("koT").style.borderColor = "black";
    var kockaTerfogat = kockaA * kockaA * kockaA;
    document.getElementById("koT").value = kockaTerfogat;
  }
}
