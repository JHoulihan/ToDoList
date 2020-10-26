$('#button').click(function(e) {

      var ul = document.getElementById("list");
      var li = document.createElement("li");

      li.appendChild(document.createTextNode(task.value));

      if (task.value > "") {

        ul.appendChild(li);

        task.value = "";

      } else {
        alert("Enter a task");
      }

      $(li).on("click", function() {
        $(li).toggleClass("done");
      });

      $(li).dblclick( function() {
        $(li).toggleClass("delete");

        setTimeout(function() {
          $(li).remove();
        }, 900);
      });

});
