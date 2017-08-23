$(document).ready(function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    if (tabs[0].url.indexOf('www.upwork.com/jobs/') == -1) {
      $("#loader").hide();
      $("#bad-page").show();
    } else {
      chrome.extension.sendMessage({ action: "getCustomerName" }, function(response) {
        $("#loader").hide();
        $("#customer-info").show();
        $("#customer-name").text(response);
      });
    }
  });

  $("#to-google").click(function () {
    chrome.extension.sendMessage({ action: "parsePage" });
    window.close();
  });
});
