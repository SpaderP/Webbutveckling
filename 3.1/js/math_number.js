var x = 10;
var slumpen = Math.floor((Math.random() * 100) +1); // Math.floor avrundar till närmaste ental och Math.random väljer ett slumpmässigt tal inclusive 0 och exlusive 1.
var mix = x + slumpen;
var bool = Boolean(slumpen > x);
document.write("Det slumpmässiga talet mellan 1- 100 är: " + slumpen +"<br>"+ "Det talet plus 10 blir: "+ Number(mix) +"<br>"+ "Boolean, är slumptalet större än 10?: "+ bool +"<br>"+ "Number funktionen skapar ett värde av Boolean som är :"+ Number(bool));
