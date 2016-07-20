/**
 * Created by steffi on 19.07.16.
 */

require(
  [

  ], function () {
    function urlExists(elt, callback)
    {
      var http = new XMLHttpRequest();
      http.open('HEAD', elt);
      http.onreadystatechange = function() {
        if (this.readyState == this.DONE) {
          callback(this.status != 404, elt);
        }
      };
      http.send();
    }

    var link = document.getElementsByTagName("a");

    for (var i = 0; i < link.length; i++) {
      console.log(link[i]);
      urlExists(link[i], function (exists, elt) {
        if (exists) {
          console.log("existiert: " + elt);
        } else {
          console.log("existiert nicht: " + elt);

          elt.setAttribute("style", "color: red");
        }
      });
    }
  }
);
