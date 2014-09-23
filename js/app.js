
// this function is for persistent header
// source: http://css-tricks.com/persistent-headers/
function UpdateTableHeaders() {
   $(".persist-area").each(function() {

       var el             = $(this),
           offset         = el.offset(),
           scrollTop      = $(window).scrollTop(),
           floatingHeader = $(".floatingHeader", this)

       if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
           floatingHeader.css({
            "visibility": "visible"
           });
       } else {
           floatingHeader.css({
            "visibility": "hidden"
           });
       };
   });
}

$(document).ready(function() {

	// for persistent header
	var clonedHeaderRow;

	$(".persist-area").each(function() {
		clonedHeaderRow = $(".persist-header", this);
		clonedHeaderRow
			.before(clonedHeaderRow.clone())
			.css("width", clonedHeaderRow.width())
			.addClass("floatingHeader");
	});

	$(window)
		.scroll(UpdateTableHeaders)
		.trigger("scroll");

	// disable persistent for small screen sized
	if ($('.main-nav li').css('display') == 'block') {
		// console.log('yaaaaaay');
		$('.primary-container').removeClass('persist-area');
		$('.main-nav').removeClass('persist-header');
	}
	$(window).resize(function(){
		if ($('.main-nav li').css('display') == 'block') {
			// console.log('yaaaaaay');
			$('.primary-container').removeClass('persist-area');
			$('.main-nav').removeClass('persist-header');
		} else {
			// console.log('lala');
			$('.primary-container').addClass('persist-area');
			$('.main-nav').addClass('persist-header');
		}
	});


	// replace tags with keyword
	$('.tags').text('Keywords:');

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