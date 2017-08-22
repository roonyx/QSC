chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "toGoogle") {
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.executeScript(tab.id, { file: 'scripts/searcher.js' });
      console.log(tab);
    });
  }
});
