<script>

function newElement(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";
}



var tags = [
"Meet DJ",
"GoTo Delhi",
"cook",
"Bring candles",
"Buy trimmer",
"pick someone",
"finish work",
"meet modi sahab",
"start a startup",
"throw train to sea",
"fly all over the world using my wings",
"unistall instagram",
"wake up at five o clock"
];


 var n= tags.length;

 function suggest(value) {
    document.getElementById('datalist').innerHTML = '';
    

     l=value.length;
     //input query length
 for (var i = 0; i<n; i++) {
     if(((tags[i].toLowerCase()).indexOf(value.toLowerCase()))>-1)
     {
       //comparing if input string is existing in tags[i] string

       var node = document.createElement("option");
       var val = document.createTextNode(tags[i]);
       node.appendChild(val);

       document.getElementById("datalist").appendChild(node);
       //creating and appending new elements in data list
         }
     }
 }

</script>
