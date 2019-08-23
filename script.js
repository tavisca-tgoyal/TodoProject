var historyArray = [];
var tags = [];

//var tags = ["Hit the gym","Pay bills", "Meet Chandan", "Buy eggs", "Read a book", "Organize office"];
//(tags = localStorage.getItem("originalArray"))();

//fetching data when page loaded
function loadContent(){
  historyArray =localStorage.getItem("hist_array").split(",");
  tags = localStorage.getItem("data_array").split(",");

  showUserData(tags,"myUL");
}

function showUserData(tags, id){
  for(var item of tags){
    var li = document.createElement("li");
    var t = document.createTextNode(item);

    li.appendChild(t);
    addDecoration(li);

    document.getElementById(id).appendChild(li);
  }
}

//adding new li dynamically
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
  span.onclick = closeTheEntry;

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("edit");
  span.className = "edit";

  span.appendChild(txt);
  li.appendChild(span);
  span.onclick = editEntry;
}

function closeTheEntry(){
  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    //adding item text to the history array
    var string = this.parentElement.textContent;
    string = string.substring(0, string.length-5);
    historyArray.push(string);
    //removing item from the tags
    var index = tags.indexOf(string);
    if (index > -1) {
      tags.splice(index, 1);
    }

    //removing the clicked item
    var div = this.parentElement;
    div.style.display = "none";
    }
  }
}

function editEntry(){
  /*editing the field*/
  var items = document.getElementsByClassName("edit");
  for(var i=0;i<items.length;i++){
    items[i].onclick = function(){
      var string = this.parentElement.textContent;
      string = string.substring(0, string.length-5);
      //removing the item from the List
      var index = tags.indexOf(string);
      if(index>-1){
        tags.splice(index,1);
      }
      historyArray.push(string);

      document.getElementById("myInput").value = string;
      this.parentElement.style.display = "none";
    }
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById("myUL");
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//saving user data when page is refreshed or window is closed
window.onbeforeunload = function(){
  localStorage.setItem("data_array",tags);
  tags = [];

  localStorage.setItem("hist_array", historyArray);
  historyArray = [];
}
