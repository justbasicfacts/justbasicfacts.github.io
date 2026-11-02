/* retro.js - the two scripts every homepage of 1997 shipped with,
   plus the one bit of frame bookkeeping this one needs. */

// 1. a clock in the top strip
function retroClock() {
  var el = document.getElementById('clock');
  if (!el) return;
  var t = new Date();
  var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
  el.textContent = pad(t.getHours()) + ':' + pad(t.getMinutes()) + ':' + pad(t.getSeconds());
}
retroClock();
setInterval(retroClock, 1000);

// 2. a visitor counter, kept in this browser so nothing is sent anywhere
(function () {
  var el = document.getElementById('visits');
  if (!el) return;
  var n = 133712;
  try {
    var seen = parseInt(localStorage.getItem('retro-visits') || '0', 10) || 0;
    seen += 1;
    localStorage.setItem('retro-visits', String(seen));
    n += seen;
  } catch (e) {
    n = 133713;
  }
  var s = String(n);
  while (s.length < 9) s = '0' + s;
  el.textContent = s;
})();

// 3. inside the frame set, drop the duplicate nav row: the menu frame
// already carries it. the plain pages keep theirs for phones and frames-off.
(function () {
  if (window.parent && window.parent !== window) {
    document.body.classList.add('framed');
  }
})();

// 4. keep the left menu in step with the page in the right frame
(function () {
  var here = location.pathname.split('/').pop() || 'index2.htm';

  function setActive(page) {
    var links = document.querySelectorAll('[data-page]');
    for (var i = 0; i < links.length; i++) {
      var on = links[i].getAttribute('data-page') === page;
      if (on) { links[i].classList.add('on'); } else { links[i].classList.remove('on'); }
    }
  }

  // menu frame: listen for the page that loaded next to us
  window.addEventListener('message', function (e) {
    if (e.data && e.data.retroPage) setActive(e.data.retroPage);
  });

  // content frame: tell the menu frame where we are. Posting to `parent`
  // reaches the frame set, not the sibling menu, so address "sol" directly.
  if (window.parent && window.parent !== window) {
    try {
      var target = (window.top.frames && window.top.frames['sol']) || window.parent;
      target.postMessage({ retroPage: here }, '*');
    } catch (e) {}
  }
})();
