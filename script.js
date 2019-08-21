var tags = [];
//(tags = localStorage.getItem("originalArray"))();

function newElement(){
  var inputValue = document.getElementById("myInput").value;

  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);


  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    tags.push(inputValue);
    //localStorage.setItem("originalArray",tags);

  }
  document.getElementById("myInput").value = "";
}

 function suggest(value) {
   document.getElementById('datalist').innerHTML = '';
   for (var i = 0; i<tags.length; i++) {
     if(((tags[i].toLowerCase()).indexOf(value.toLowerCase()))>-1)
     {
       var node = document.createElement("option");
       var val = document.createTextNode(tags[i]);
       node.appendChild(val);
       document.getElementById("datalist").appendChild(node);
      }
   }
 }



 //adding a close button in each list item
var parent = document.getElementById('main');
var liList = parent.getElementsByTagName('LI');

for (var i = 0; i < liList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  liList[i].appendChild(span);
  //document.getElementById("main").appendChild(span);
}
