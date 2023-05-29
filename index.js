function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//function to count persegi

function luasPersegi(event) {
  event.preventDefault();
  var input = document.getElementById("inputPersegi");
  var value = input.value;
  var luas = 2 * value;

  console.log(value);

  if (value === "" || value === null) {
    document.getElementById("luas").innerHTML =
      "Masukkan angka yang ingin dihitung";
    return;
  } else {
    document.getElementById("luas").innerHTML = "Luas persegi adalah " + luas;

    var persegiInput = document.getElementById("inputPersegi");

    var isValid = true;

    if (persegiInput.value.trim() === "") {
      persegiInput.style.border = "1px solid red";
      isValid = false;
    } else {
      persegiInput.style.border = "1px solid grey";
    }
  }
}

function kelilingPersegi(event) {
  event.preventDefault();
  var input = document.getElementById("inputPersegi");
  var value = input.value;
  var keliling = 4 * value;

  if (value === "" || value === null) {
    document.getElementById("luas").innerHTML =
      "Masukkan angka yang ingin dihitung";
    return;
  }

  document.getElementById("luas").innerHTML =
    "Keliling persegi adalah " + keliling;

  var persegiInput = document.getElementById("inputPersegi");

  var isValid = true;

  if (persegiInput.value.trim() === "") {
    persegiInput.style.border = "1px solid red";
    isValid = false;
  } else {
    persegiInput.style.border = "1px solid grey";
  }

  if (isValid) {
    // Form is valid, submit it
    this.submit();
  }
}

function resetPersegi(event) {
  event.preventDefault();
  var getValue = document.getElementById("inputPersegi");
  if (getValue.value != "") {
    getValue.value = "";
  }
}

//function to count persegi panjang

function luasPersegiPanjang(event) {
  event.preventDefault();
  var inputPanjang = document.getElementById("inputPanjang");
  var inputLebar = document.getElementById("inputLebar");
  var panjang = inputPanjang.value;
  var lebar = inputLebar.value;
  var luas = panjang * lebar;

  if ((panjang === "" && lebar === "") || panjang === null || lebar === null) {
    document.getElementById("luas1").innerHTML =
      "Masukkan panjang dan lebar persegi panjang yang ingin dihitung";
    return;
  } else if (panjang === "" || panjang === null) {
    document.getElementById("luas1").innerHTML =
      "Masukkan panjang persegi panjang yang ingin dihitung";
    return;
  } else if (lebar === "" || lebar === null) {
    document.getElementById("luas1").innerHTML =
      "Masukkan lebar persegi panjang yang ingin dihitung";
    return;
  }

  document.getElementById("luas1").innerHTML =
    "Luas persegi panjang adalah " + luas;

  var panjangInput = document.getElementById("inputPanjang");
  var lebarInput = document.getElementById("inputLebar");

  var isValid = true; // Flag to track form validity

  if (panjangInput.value.trim() === "") {
    panjangInput.style.border = "1px solid red";
    isValid = false;
  } else {
    panjangInput.style.border = "1px solid grey";
  }
  if (lebarInput.value.trim() === "") {
    lebarInput.style.border = "1px solid red";
    isValid = false;
  } else {
    lebarInput.style.border = "1px solid grey";
  }
}

function kelilingPersegiPanjang(event) {
  event.preventDefault();
  var inputPanjang = document.getElementById("inputPanjang");
  var inputLebar = document.getElementById("inputLebar");
  var panjang = inputPanjang.value;
  var lebar = inputLebar.value;
  var luas = 2 * panjang + 2 * lebar;

  if ((panjang === "" && lebar === "") || panjang === null || lebar === null) {
    document.getElementById("luas1").innerHTML =
      "Masukkan panjang dan lebar persegi panjang yang ingin dihitung";
    return;
  } else if (panjang === "" || panjang === null) {
    document.getElementById("luas1").innerHTML =
      "Masukkan panjang persegi panjang yang ingin dihitung";
    return;
  } else if (lebar === "" || lebar === null) {
    document.getElementById("luas1").innerHTML =
      "Masukkan lebar persegi panjang yang ingin dihitung";
    return;
  }

  document.getElementById("luas1").innerHTML =
    "Keliling persegi panjang adalah " + luas;

  var panjangInput = document.getElementById("inputPanjang");
  var lebarInput = document.getElementById("inputLebar");

  var isValid = true; // Flag to track form validity

  if (panjangInput.value.trim() === "") {
    panjangInput.style.border = "1px solid red";
    isValid = false;
  } else {
    panjangInput.style.border = "1px solid grey";
  }
  if (lebarInput.value.trim() === "") {
    lebarInput.style.border = "1px solid red";
    isValid = false;
    document.getElementById("luas1").style.visibility = "visible";
  } else {
    lebarInput.style.border = "1px solid grey";
  }
}

function resetPersegiPanjang(event) {
    event.preventDefault();
  var getValue1 = document.getElementById("inputPanjang");
  var getValue2 = document.getElementById("inputLebar");
  if (getValue1.value != "" && getValue2.value != "") {
    getValue1.value = "";
    getValue2.value = "";
  }
}
