chrome.contextMenus.create({
	"title":"[%s]をAmazonで検索",
	"type":"normal",
	"contexts":["selection"],
	"onclick":function(info){
		var url = "http://www.amazon.co.jp/s/ref=nb_sb_noss?field-keywords="+ encodeURIComponent(info.selectionText);

		chrome.tabs.create({
			url:url
		});
	}
});