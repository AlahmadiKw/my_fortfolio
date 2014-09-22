

$(document).ready(function() {

	$(function() {
		$( ".accordion" ).accordion({
			collapsible: true,
			active: false,
			heightStyle: "content"
		});
	});

	$(function() {
		$( "#prog-python" ).progressbar({
			value: 90
		});
		$( "#prog-php" ).progressbar({
			value: 90
		});
		$( "#prog-c" ).progressbar({
			value: 70
		});
		$( "#prog-cpp" ).progressbar({
			value: 60
		});
		$( "#prog-java" ).progressbar({
			value: 40
		});
		$( "#prog-matlab" ).progressbar({
			value: 80
		});
		$( "#prog-perl" ).progressbar({
			value: 40
		});
	});

});