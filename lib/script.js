$(document).ready(function(){
	for(i=0; i<bookmarks.length; i++) {
		var title = bookmarks[i][0];
		var url = bookmarks[i][1];
		var thumb = bookmarks[i][2];
		$('#thumb'+(i+1)).html('<a href="'+url+'"><img src="thumbs/'+thumb+'" /></a>');
	}
});