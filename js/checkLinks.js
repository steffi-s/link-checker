/**
 * Created by steffi on 20.07.16.
 */

/**
 * link-checker by Stefanie Schmidt
 *
 * simple link checker in JavaScript and JQuery
 *
 * Features:
 *
 * 1. It's very simple
 * 2. detects dead links, and marks them red
 *
 * @author Stefanie Schmidt
 * @licence BSD-3
 */

(function ($) {
  $.fn.linkCheck = function (elt, callback) {
    var http = new XMLHttpRequest();
    http.open('HEAD', elt);
    http.onreadystatechange = function() {
      if (this.readyState == this.DONE) {
        callback(this.status != 404, elt);
      }
    };
    http.send();
  };

  var link = document.getElementsByTagName("a");

  for (var i = 0; i < link.length; i++) {
    console.log(link[i]);
    $.fn.linkCheck(link[i], function (exists, elt) {
      if (exists) {
        console.log("existiert: " + elt);
      } else {
        console.log("existiert nicht: " + elt);

        elt.setAttribute("style", "color: red");
      }
    });
  }
})(jQuery);