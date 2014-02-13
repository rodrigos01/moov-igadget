$("./body") {
  add_class("_product");

  $("./div[@id='Container']/div[@id='Outer']/div[@id='Wrapper']") {

  	remove("./div[@id='LayoutColumn1']");

  	$("./div[@id='LayoutColumn2']"); {
  		remove("./div[contains(@class, 'Breadcrumb')]")

  		$("./div[@id='ProductDetails']"); {

  			$("./div[@class='BlockContent']"); {

  				remove("./div[contains(@class,'AddThisButtonBox')]")

  				$(".//div[@class='BulkDiscount']") {
  					remove("./*");
  					insert("input", type: "submit", value: "Add to Cart");
  				}

  			}

  		}
  	}
  }
}