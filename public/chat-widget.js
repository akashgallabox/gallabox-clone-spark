(function () {
  "use strict";

  // ---- Config (override via window.GallaboxWidget = { ... } before this script) ----
  var cfg = Object.assign(
    {
      title: "Gallabox Assistant",
      subtitle: "Online now",
      welcome: "Hi there! 👋 I'm Galla, your AI assistant. How can I help you today?",
      primary: "#3a4ff5",
      whatsapp: "+10000000000", // set your WhatsApp number to deep-link
      quickReplies: ["See pricing plans", "Book a demo", "Talk to sales"],
    },
    window.GallaboxWidget || {}
  );

  if (document.getElementById("gb-widget-root")) return;

  // ---- Styles ----
  var css =
    "#gb-widget-root{position:fixed;bottom:20px;right:20px;z-index:2147483000;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}" +
    "#gb-toggle{width:56px;height:56px;border:none;border-radius:50%;background:" +
    cfg.primary +
    ";color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 30px rgba(0,0,0,.25);transition:transform .15s}" +
    "#gb-toggle:hover{transform:scale(1.06)}" +
    "#gb-panel{position:absolute;bottom:72px;right:0;width:340px;max-width:90vw;height:460px;background:#fff;border-radius:16px;overflow:hidden;display:none;flex-direction:column;box-shadow:0 24px 60px rgba(0,0,0,.28)}" +
    "#gb-panel.open{display:flex}" +
    ".gb-head{background:" +
    cfg.primary +
    ";color:#fff;padding:14px 16px;display:flex;align-items:center;gap:10px}" +
    ".gb-av{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-weight:700}" +
    ".gb-head h4{margin:0;font-size:14px}.gb-head p{margin:0;font-size:12px;opacity:.9}" +
    ".gb-x{margin-left:auto;background:none;border:none;color:#fff;cursor:pointer;font-size:20px;line-height:1}" +
    ".gb-body{flex:1;overflow-y:auto;padding:14px;background:#f4f5fb;display:flex;flex-direction:column;gap:10px}" +
    ".gb-msg{max-width:80%;padding:8px 12px;border-radius:14px;font-size:14px;line-height:1.45}" +
    ".gb-bot{align-self:flex-start;background:#fff;color:#1a1a2e;box-shadow:0 1px 4px rgba(0,0,0,.08);border-bottom-left-radius:4px}" +
    ".gb-user{align-self:flex-end;background:" +
    cfg.primary +
    ";color:#fff;border-bottom-right-radius:4px}" +
    ".gb-qr{display:flex;flex-wrap:wrap;gap:8px}" +
    ".gb-qr button{border:1px solid " +
    cfg.primary +
    "55;background:#fff;color:" +
    cfg.primary +
    ";border-radius:999px;padding:6px 12px;font-size:12px;cursor:pointer}" +
    ".gb-foot{display:flex;gap:8px;align-items:center;padding:10px;border-top:1px solid #eee;background:#fff}" +
    ".gb-foot input{flex:1;border:none;outline:none;font-size:14px;padding:6px}" +
    ".gb-send{width:36px;height:36px;border:none;border-radius:50%;background:" +
    cfg.primary +
    ";color:#fff;cursor:pointer}";

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  // ---- Markup ----
  var root = document.createElement("div");
  root.id = "gb-widget-root";
  root.innerHTML =
    '<div id="gb-panel">' +
    '<div class="gb-head"><span class="gb-av">G</span><div><h4>' +
    cfg.title +
    "</h4><p>● " +
    cfg.subtitle +
    '</p></div><button class="gb-x" aria-label="Close">×</button></div>' +
    '<div class="gb-body" id="gb-body"></div>' +
    '<form class="gb-foot" id="gb-form"><input id="gb-input" placeholder="Type your message…" autocomplete="off"/><button class="gb-send" type="submit" aria-label="Send">➤</button></form>' +
    "</div>" +
    '<button id="gb-toggle" aria-label="Open chat">💬</button>';
  document.body.appendChild(root);

  var panel = root.querySelector("#gb-panel");
  var body = root.querySelector("#gb-body");
  var form = root.querySelector("#gb-form");
  var input = root.querySelector("#gb-input");

  function add(text, who) {
    var d = document.createElement("div");
    d.className = "gb-msg " + (who === "user" ? "gb-user" : "gb-bot");
    d.textContent = text;
    body.appendChild(d);
    body.scrollTop = body.scrollHeight;
  }

  function quickReplies() {
    var wrap = document.createElement("div");
    wrap.className = "gb-qr";
    cfg.quickReplies.forEach(function (q) {
      var b = document.createElement("button");
      b.textContent = q;
      b.onclick = function () {
        handle(q);
      };
      wrap.appendChild(b);
    });
    body.appendChild(wrap);
  }

  function handle(text) {
    if (!text.trim()) return;
    add(text, "user");
    setTimeout(function () {
      add(
        "Thanks! A specialist will reach out shortly. You can also start a free trial — no credit card required.",
        "bot"
      );
    }, 650);
  }

  add(cfg.welcome, "bot");
  quickReplies();

  root.querySelector("#gb-toggle").onclick = function () {
    panel.classList.toggle("open");
  };
  root.querySelector(".gb-x").onclick = function () {
    panel.classList.remove("open");
  };
  form.onsubmit = function (e) {
    e.preventDefault();
    handle(input.value);
    input.value = "";
  };
})();
