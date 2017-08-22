chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "parsePage") {
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.executeScript(tab.id, { file: 'scripts/searcher.js' });
    });
  } else if (request.action == "toGoogle") {
    var name = request.data.buyer.info.company.name;
    var city = request.data.buyer.info.location.city;
    var country = request.data.buyer.info.location.country;
    var searchRequest = searchRequest = name + ' ' + (city || country);
  }
});
