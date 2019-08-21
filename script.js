var tags = [
  // "Meet DJ",
  // "GoTo Delhi",
  // "cook",
  // "Bring candles",
  // "Buy trimmer",
  // "pick someone",
  // "finish work",
  // "meet modi sahab",
  // "start a startup",
  // "throw train to sea",
  // "fly all over the world using my wings",
  // "unistall instagram",
  // "wake up at five o clock"
];


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
