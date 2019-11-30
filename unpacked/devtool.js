//console.log('Hello from -> Devtool');
chrome.devtools.panels.create(
	"下载资源",
	"icon.gif",
	"content.html",
	function(panel) { 
		console.log("Content is loaded to panel"); 
	}
);