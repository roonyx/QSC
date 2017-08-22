$(document).ready(function () {
  var api_link = 'https://www.upwork.com/ab/proposals/api/jobs/uid/';
  var bodyHtml;
  var match;
  var response;
  var xhr;

  bodyHtml = $('body')[0].innerHTML;
  match = /openingUid\'\,\s\'(\d+)/ig.exec(bodyHtml);

  xhr = new XMLHttpRequest();

  xhr.open('GET', api_link + match[1], false);
  xhr.send();

  response = JSON.parse(xhr.responseText);

  if (xhr.status === 200) {
    chrome.extension.sendMessage({ action: "toGoogle", data: response } );
  }
});
