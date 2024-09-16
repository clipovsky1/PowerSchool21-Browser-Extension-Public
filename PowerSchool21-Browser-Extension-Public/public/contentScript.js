console.log("Content script loaded."); // Log when content script is loaded

document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var currentUrl = tabs[0].url;
      console.log(currentUrl);
    });
  });