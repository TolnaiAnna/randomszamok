function generateRandomNumber() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result").innerHTML = "Véletlenszerű szám: " + randomNumber;
  }
  