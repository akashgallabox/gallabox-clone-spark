(function () {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiaHR0cHM6Ly9rdy5nYWxsYWJveC5jb20vYXIvIiwiaWQiOiI2OWYzMmFiMDIyNDlhNDE2M2JiY2Q5ZDQiLCJhY2NJZCI6IjYwMDVlYzQxNWRkZDcxMDAwNDMyMzkwZCIsImlhdCI6MTc4MDU3ODQzM30.aX0TpCqKV_yoCiSj8sbErOckpRRZgKmiArHG1UKvAu8";

  (function (w, d, s, u, t) {
    w.Chatty = function (c) {
      w.Chatty._.push(c);
    };
    w.Chatty._ = [];
    w.Chatty.url = u;
    w.Chatty.hash = t;

    var h = d.getElementsByTagName(s)[0],
      j = d.createElement(s);

    j.async = true;
    j.src =
      "https://widget.gallabox.com/chatty-widget-v2.min.js?_=" + Math.random();
    h.parentNode.insertBefore(j, h);
  })(window, document, "script", "https://widget.gallabox.com", token);
})();
