(function() {
  // Path from units/unit01/dist/index.html back up to the root index.html
  var HOME = '../../../index.html';

  function addButton() {
    if (document.getElementById('home-btn')) return;
    var a = document.createElement('a');
    a.id = 'home-btn';
    a.href = HOME;
    a.title = 'Back to course home';
    a.setAttribute('aria-label', 'Back to course home');
    a.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:6px">' +
      '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>Home';
    a.style.cssText =
      'position:fixed;top:12px;right:14px;z-index:50;' +
      'font:600 14px/1 Sarabun,system-ui,sans-serif;color:#fff;background:#1d6fa5;' +
      'padding:8px 14px;border-radius:999px;text-decoration:none;' +
      'box-shadow:0 1px 4px rgba(0,0,0,.25);opacity:.85';
    a.onmouseenter = function() { a.style.opacity = '1'; };
    a.onmouseleave = function() { a.style.opacity = '.85'; };
    document.body.appendChild(a);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addButton);
  } else {
    addButton();
  }
})();
