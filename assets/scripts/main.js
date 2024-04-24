document.addEventListener('DOMContentLoaded', (event) => {
  const secret = getUrlParameter('secret');
  if (secret != "hithere") {
    document.getElementById('primary').style.display = 'none';
    document.getElementById('work-in-progress-message').style.display = 'block';
  }
});

// https://stackoverflow.com/questions/19491336/how-to-get-url-parameter-using-jquery-or-plain-javascript
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
  return false;
};
