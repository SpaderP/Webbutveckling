var beforeTaxes = 30000.52;
var afterTaxes = beforeTaxes * 0.6942;

var rounded = Math.round(afterTaxes);

if (rounded < 35000) { // Kollar om variablen rounded är mindre än 35 000 och i så fall skriver ut det som står nedan
	document.write("Wish you made as much as " + greatest);
} else {
	document.write("Wow......."); // Om värdet är större än 35 000 skrivs wow...... ut
}