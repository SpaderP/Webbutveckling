var champs = new Array("DJ", "Mcgregor", "Woodley", "GSP", "Miocic");
var date = new Date();
var kör = "körde";
var x = "15";
var goat = false;
var greatest = "";

var loop = champs.length;

document.write("Den " + date.getDate() +" / " + date.getMonth() + " / " + date + " är dessa UFC champs: ");


for (var i = 0; i < loop; i++) { // Loopar igenom längden på arrayen champs och skriver ut deras namn
  document.write(champs[i] + " ");

var great = champs[i];

if (great == "DJ"){ // Kollar om variabeln great är lika med DJ och i sätter då goat till true och sätter variabeln greatest till DJ
  goat = true;
  greatest = great;
  }
}

document.write("GOAT= " + greatest); // skriver ut GOAT = greatest variabelns värde
