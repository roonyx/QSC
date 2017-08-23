chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  window[request.action](request, sender, sendResponse);
});

function parsePage(request, sender, sendResponse) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.executeScript(tab.id, { file: 'scripts/searcher.js' });
  });
}

function getCustomerName(request, sender, sendResponse) {
  sendResponse('Alexandr');
}

function toGoogle(request, sender, sendResponse) {
  var name = request.data.buyer.info.company.name;
  var city = request.data.buyer.info.location.city;
  var country = request.data.buyer.info.location.country;

  var searchRequest = [name, city, country]
    .filter(i => typeof i === 'string')
    .join('+');

  chrome.tabs.create({
    active: false,
    url: 'http://www.google.com/search?q=' + searchRequest
  });
}
