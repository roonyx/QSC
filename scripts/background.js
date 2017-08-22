chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "toGoogle") {
    chrome.tabs.getSelected(null, function(tab) {
      console.log(tab);
    });
  }
});
