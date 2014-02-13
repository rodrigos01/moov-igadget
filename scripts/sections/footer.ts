# $("./body") {
#   insert_bottom("footer", class: "_footer") {
#     Move stuff here
#   }
# }


$(".//div[@id='Footer']") {
	remove("./p")
	insert("p", "All prices are in USD");
	insert("p", "Copyright 2014 igadget commerce");
}