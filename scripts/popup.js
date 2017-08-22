$(document).ready(function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    if (tabs[0].url.indexOf('www.upwork.com/jobs/') == -1) {
      $("#toGoogle").prop('disabled', true);
    }
  });

  $("#toGoogle").click(function () {
    chrome.extension.sendMessage({ action: "toGoogle" } );
    window.close();
  });
});
