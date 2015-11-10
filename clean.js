function load () {
    chrome.tabs.executeScript({
    	code:'document.getElementById("notification-banner").style.display = "none"'
	});	
};

chrome.tabs.onActivated.addListener(function() {
    load();
});

chrome.tabs.onUpdated.addListener(function() {
    load();
})
