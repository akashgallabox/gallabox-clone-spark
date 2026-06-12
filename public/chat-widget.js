(function () {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiaHR0cHM6Ly9hbmFudGFtZ29hLmNvbS8iLCJpZCI6IjZhMmI4ZWMxODY3MzZhM2E5ZmQ1ZWJiNSIsImFjY0lkIjoiNjYzYTIwNzBmODhlNzEyOTZmYzU3MGRkIiwiaWF0IjoxNzgxMjM5NzY3fQ.LLPmA-0NAOkdi8ySuEZwX9FeRu2Roy0WdYPyKv8Xe5o";

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
    j.src = "https://widget.gallabox.com/chatty-widget-v2.min.js?_=" + Math.random();
    h.parentNode.insertBefore(j, h);
  })(window, document, "script", "https://widget.gallabox.com", token);
})();
