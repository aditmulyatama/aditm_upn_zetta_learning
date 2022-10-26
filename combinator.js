function combinator(text) {
    var hasil = "";
    text.map(function (text) {
        hasil += " " + text;
    });
    return hasil;
}
var text1 = [1, "data", "3", "result"];
var text2 = ["Bejo", "has", "4", "sport", "car"];
console.log(combinator(text1));
console.log(combinator(text2));
