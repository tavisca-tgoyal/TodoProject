var arr = [];
arr = localStorage.getItem("hist_array").split(",");

var length = arr.length;

  for(var item of arr){

      var li = document.createElement("li");
      var t = document.createTextNode(item);

      li.appendChild(t);


      document.getElementById("historyUL").appendChild(li);
    }

    var string = `Congratulation you have completed ${length} tasks`;
    var li = document.createElement("h2");
    var t = document.createTextNode(string);

    li.appendChild(t);

    document.getElementById("historyCount").appendChild(li);
