var interval;
var time;
var nyttFonster;
var mittFonster;

// Denna metod gör att ett sk popupfönster.
function alertFunk() {
	alert("Detta är alert!");
}
// metoden visar en confirmruta där man kan trycka okej eller avbryt
function confirmFunk() {
	confirm("Metod: Confirm");
}
//Denna metod promtar användaren att skriva något och visar sedan svaret användaren skrev.
function promptFunk(){
	var input = prompt("Skriv in något roligt!");
	alert(input + " tyckte du var roligt!");
}
// denna funktion öppnar ett fönster som har
function oppnaFonsterFunk() {
    mittFonster = window.open("", "mittFonster", "width=200,height=100");
    mittFonster.document.write("<p>Detta är  'mittFonster'</p>");
}
// metoden stänger ner det nyöppnade fönstret

function stangFonsterFunk() {
    mittFonster.close();
}

// sätter en intervall där hur ofta en alertruta ska visas
function intervalFunk(){
	interval = setInterval(alertFunk, 3000);
}
// avbryter intervallen
function clearIntervalFunk(){
	clearInterval(interval);
}
// sätter timeout där en alertruta visas, denna visas en gång till skillnad från setInterval
function setTimeoutFunk(){
	time = setTimeout(alertFunk, 3000);
}
// Dennna funktion stoppar timeout
function clearTimeoutFunk(){
	clearTimeout(time);
}
