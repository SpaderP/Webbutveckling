var searched = /Teymur/;
var quoteByWhite = "Dana White stated that Swedens David Teymur would fight at the end of the year";
var found = quoteByWhite.search(searched); // kollar vilken plats teymur finns på
var ranked = 25;

document.write(Number(ranked) + " ranked fighter: " + quoteByWhite);
if (found < 50) { // skriver ut teymur hittad... om found är mindre än 50, annars skriver ut för långt.....
	document.write(":- Teymur hittad på plats " + found);
} else {
	document.write("För långt pressmeddelande.");
}	