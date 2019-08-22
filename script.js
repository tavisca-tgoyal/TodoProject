var tags = ["Hit the gym","Pay bills", "Meet Chandan", "Buy eggs", "Read a book", "Organize office"];
//(tags = localStorage.getItem("originalArray"))();

function newElement(){
  var inputValue = document.getElementById("myInput").value;

  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  addDecoration(li);


  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    tags.push(inputValue);
    //localStorage.setItem("originalArray",tags);

  }
  document.getElementById("myInput").value = "";
  // addEdit();
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

/*even trigging when enter is pressed inside input field*/
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("inputButton").click();
  }
});

 //adding a close and edit button in each list item
var parent = document.getElementById('todo-div');
var liList = parent.getElementsByTagName('li');

for (var i = 0; i < liList.length; i++) {
  addDecoration(liList[i]);
  }

function addDecoration(li){
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("edit");
  span.className = "edit";
  span.appendChild(txt);
  li.appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById("myUL");
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



/*editing the field*/
var items = document.getElementsByClassName("edit");
for(var i=0;i<items.length;i++){
  items[i].onclick = function(){
    var string = this.parentElement.textContent;
    string = string.substring(0, string.length-5);
    document.getElementById("myInput").value = string;
    this.parentElement.style.display = "none";
  }
}
