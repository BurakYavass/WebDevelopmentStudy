//document.getElementById("bio").innerHTML="Burak Yavas"

// var intro1 = document.getElementById("intro1");

// var mesaj = document.getElementById("mesaj")

// mesaj.innerHTML = intro1.innerHTML;

// var lists = document.getElementsByTagName("ul");

// var sehirler = lists[0]

// allElements = sehirler.getElementsByTagName("li");

// for (i = 0; i < allElements.length; i++) {
//     alert(allElements[i].innerHTML)
// }

//  var classElements = document.getElementsByClassName("intro");

//  alert(classElements[1].innerHTML);
//  alert(classElements.length);

// var queryElements = document.querySelectorAll("p.intro");
// alert(queryElements.length);

// var nameElements = document.getElementsByName("musteriAdi");
// alert(nameElements[0].value);

// var nameElements = document.getElementById("isim").addEventListener("mouseover",changeValueP1);

function changeValueP1(){
   var p1Element = document.getElementById("p1");
   p1Element.innerHTML = document.getElementById("isim").innerHTML;
   p1Element.style.background = "red";
}

var header = document.createElement("h2");
var node = document.createTextNode("Merhaba Javascript")

header.appendChild(node)

var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")

div1.insertBefore(header,p2)


// alert("P2 siliniyor")
// div1.removeChild(p2);

alert("Degistiriliyor")
var p1 = document.getElementById("p1")
div1.replaceChild(header,p1)
//div1.style.backgroundColor ="blue"