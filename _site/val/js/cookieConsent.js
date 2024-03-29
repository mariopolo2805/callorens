var cookieConsent = function() {
  function initCookieConsent(url) {
    $(document).ready(function() {
      window.cookieconsent.initialise({
        "palette": {
          "popup": {
            "background": "#009688",
          },
          "button": {
            "background": "#eceff1",
            "text": "#4db6ac"
          },
        },
        "content": {
          "message": "Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias. Si continua navegando, consideramos que acepta su uso.",
          "dismiss": "Aceptar",
          "link": "Más información",
          "href": url
        }
      });
    });
  }
  return {
    initCookieConsent: initCookieConsent
  };
}();
