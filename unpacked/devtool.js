//console.log('Hello from -> Devtool');
chrome.devtools.panels.create(
	"下载资源",
	"icon.png",
	"content.html",
	function(panel) { 
		console.log("Content is loaded to panel"); 
	}
);