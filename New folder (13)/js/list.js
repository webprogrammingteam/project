$(document).ready(function(){

	var url = window.location.href;
	path = url.split('&');
	idx = path[0].indexOf('=');
	curpage = path[0].substring(idx+1);

	categoryName = 'all';
	if(path.length>1){
		idx = path[1].indexOf('=');
		if(path[1].indexOf('search') != -1){
			searchName = path[1].substring(idx+1);
			// alert(searchName);
			showSearchPages(curpage, searchName);
		} else{
			categoryName = path[1].substring(idx+1);
			showPages(curpage, categoryName);
		}
	} else {
		showPages(curpage, categoryName);
	}

   $("#searchButton").click(function(){
	   searchName = $("#search").val();
	   window.location.href='index.html?page=1&search='+searchName;
   });

});

function showPages(curpage, categoryName) {
	$.ajax({
		type: 'GET',
		url: 'php/get_musics.php',
		dataType: 'json',
		data:{ page: curpage, category: categoryName},
		success: function(response){

			pages = response['pages'];
			movies = response['movies'];
			page = response['page'];

			paginginfo = "";
			if (categoryName == 'all') {
				for (var i = 1; i <= pages; i++) {
					paginginfo += "<li><a href=\"index.html?page=" +i + "\">" + i + "</a></li>";
				}
			} else {
				for (var i = 1; i <= pages; i++) {
					paginginfo += "<li><a href=\"index.html?page=" +i + "&category=" + categoryName + "\">" + i + "</a></li>";
				}
			}


			$("#paging_link").html(paginginfo);
			main = "";
			$.each(movies,function(k,movie){
				console.log(k, movie);

				// deals with stock situation
				if (movie['quantity'] == 0 ) {
					button = "<a href= \"#\" class=\"btn btn-danger pull-right\" role=\"button\">Out of Stock</a>";
				} else {
					button = "<a href=\"cart.php?id=" + movie["PID"] + "\" class=\"btn btn-success pull-right\" role=\"button\">Add to Cart</a>";
				}

				main += "<div class=\"col-sm-8 col-md-4 Cart\">" +
				"<div class=\"thumbnail\">" +
				"<img src=\"img/" + movie["image"] +"\" class=\"img-responsive\">" +
				"<div class=\"caption\">" +
				"<h3> " +movie["pname"] + "</h3>" + 
				"<p class = \"description\">" + movie["description"] + "</p>" + 
				"<div class= \"clearfix\">" +
				"<div class=\"price pull-left\"> $ " + movie["price"] + "</div>" +
				button + 
				"</div></div></div></div>";

			});
			$("#main").html(main);
		}
	});
}


function showSearchPages(curpage, searchName) {
      $.ajax({
      type: 'GET',
      url: 'php/search.php',
      dataType: 'json',
      data:{ page: curpage, searchname: searchName},
      success: function(response){

         pages = response['pages'];
         movies = response['movies'];
         page = response['page'];

         paginginfo = "";
         for (var i = 1; i <= pages; i++) {
            paginginfo += "<li><a href=\"index.html?page=" +i + "&search=" + searchName + "\">" + i + "</a></li>";
         }

         $("#paging_link").html(paginginfo);
         main = "";
         $.each(movies,function(k,movie){
            console.log(k, movie);

            // deals with stock situation
            if (movie['quantity'] == 0 ) {
               button = "<a href= \"#\" class=\"btn btn-danger pull-right\" role=\"button\">Out of Stock</a>";
            } else {
               button = "<a href=\"cart.php?id=" + movie["PID"] + "\" class=\"btn btn-success pull-right\" role=\"button\">Add to Cart</a>";
            }

            main += "<div class=\"col-sm-8 col-md-4 Cart\">" +
            "<div class=\"thumbnail\">" +
            "<img src=\"img/" + movie["image"] +"\" class=\"img-responsive\">" +
            "<div class=\"caption\">" +
            "<h3> " +movie["pname"] + "</h3>" + 
            "<p class = \"description\">" + movie["description"] + "</p>" + 
            "<div class= \"clearfix\">" +
            "<div class=\"price pull-left\"> $ " + movie["price"] + "</div>" +
            button + 
            "</div></div></div></div>";

         });
         $("#main").html(main);
      }
   });
}


