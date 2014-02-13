$("./body") {
  	add_class("_home")
	$(".//div[@id='Wrapper']") {
		remove("./div[@id='LayoutColumn1']");
		remove(".//span[contains(@class, 'FeedLink')]");
	}
}
