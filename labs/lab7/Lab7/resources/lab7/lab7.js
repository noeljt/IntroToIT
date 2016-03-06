$(document).ready(function() {
	$.ajax({
 	 	type: "GET",
 	 	url: "resources/lab7/projects.js",
 	 	dataType: "json",
 	 	success: function(json_data){
      var output = "<ul class='projects'>";  
  	 	$.each(json_data["projects"], function(i, item) {
     		output += '<li class="project"><a href="' + item.url + '">';
      	output += '<img title="' + item.name + '" src="' + item.pic;
      	output += '" alt="'; 
      	output += item.name + '" />';
      	output += '</a></li>';
    	});
    	output += "</ul>";
    	$('#projects').html(output);
  	}, error: function(msg) {
    				// there was a problem
    	alert("There was a problem: " + msg.status + " " + msg.statusText);
  	}
	});
});

