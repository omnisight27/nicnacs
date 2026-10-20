/* NicNacs Thrift Store — shared header & footer injection (DRAFT site) */
(function () {
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (page === "") page = "index.html";

  function current(name) {
    return page === name ? ' aria-current="page"' : "";
  }

  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="wrap header-inner">' +
        '<a class="brand" href="index.html">' +
          '<img src="assets/NicNacs-Logo-transparent.png" alt="NicNacs Thrift Store logo" width="52" height="52">' +
          '<span><span class="brand-name">NicNacs</span>' +
          '<span class="brand-sub">Thrift Store</span></span>' +
        '</a>' +
        '<nav class="main-nav" aria-label="Main">' +
          '<ul>' +
            '<li><a href="index.html"' + current("index.html") + '>Home</a></li>' +
            '<li><a href="about.html"' + current("about.html") + '>About Us</a></li>' +
            '<li><a href="donate.html"' + current("donate.html") + '>Donate</a></li>' +
          '</ul>' +
        '</nav>' +
      '</div>';
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="wrap">' +
        '<nav aria-label="Footer">' +
          '<ul>' +
            '<li><a href="index.html">Home</a></li>' +
            '<li><a href="about.html">About Us</a></li>' +
            '<li><a href="donate.html">Donate</a></li>' +
          '</ul>' +
        '</nav>' +
        '<p>126 NE Steiger Street, Grants Pass, OR 97526<br>' +
        'Questions? Email us at <a href="mailto:nicnacsthriftstore@gmail.com">nicnacsthriftstore@gmail.com</a></p>' +
        '<p class="honesty">NicNacs Thrift Store is an Oregon nonprofit corporation. ' +
        'Our application for 501(c)(3) federal tax-exempt status was filed with the IRS ' +
        'in October 2026 and is pending.</p>' +
        '<p class="fineprint">&copy; 2026 NicNacs Thrift Store. Helping people, help people.</p>' +
      '</div>';
  }
})();
