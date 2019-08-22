var arr = [];
arr = localStorage.getItem("hist_array").split(",");


  for(var item of arr){

      var li = document.createElement("li");
      var t = document.createTextNode(item);

      li.appendChild(t);


      document.getElementById("historyUL").appendChild(li);
    }
