$(document).ready(function() {
	$('#fullpage').fullpage({
        anchors: ['1', '2', '3'],
    });

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});