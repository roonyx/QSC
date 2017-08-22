$(document).ready(function () {
  $("#toGoogle").click(function () {
    chrome.extension.sendMessage({ action: "toGoogle" } );
  });
});









