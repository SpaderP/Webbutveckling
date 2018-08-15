var listanStr = new Array("Str1 ", "Str2", "Str3", "Str4", "Str5");
var listanInt = new Array(1,2,3,4,5);



var date = new Date();


var sant = "Mer än halva månaden kvar";
var falsk = "det är mindre än halv månaden kvar";
if (date.getDate() < sant){
  document.write(sant + "<br>");
  else {
    document.write(falsk + "<br>");
  }

}

function testNum(a) {
	var date = new Date();
  if (a > 15) {
    return "Mer än halva månaden kvar dagens datum är " + date.getDate() +" och mer än 15. ";
  } else {
    return "Det är mindre än halv månaden kvar, dagens datum är " + date.getDate() + " och mindre än 15. ";
  }
}

document.write("Lista med String: " + listanStr + "<br>");
document.write("Lista med Int: " + listanInt + "<br>");

document.write("Dagens Datum " + date.getDate() +" / " + date.getMonth()".");

document.write(testNum(5) + "<br>");
document.write(testNum(date));
