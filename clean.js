chrome.tabs.onActivated.addListener(function() {
  load();
});

chrome.tabs.onUpdated.addListener(function() {
  load();
})

var load = function() {
    chrome.tabs.executeScript({
    	code:'document.getElementById("notification-banner").style.display = "none"'
	});
}