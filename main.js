window.onload = function() {
  if (!document.cookie.includes('cookieBannerShown=true')) {
    document.getElementById('cookie-banner').style.display = 'block';
  }

  document.getElementById('cookie-button').addEventListener('click', closeCookieBanner);
}

function closeCookieBanner() {
  document.cookie = 'cookieBannerShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  document.getElementById('cookie-banner').style.display = 'none';
}

