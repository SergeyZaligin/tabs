$(document).ready(function(){

	$(".b-tabs-content .b-tabs-content__item").not(':first').hide();

	$(".b-tabs-navigation__item").each(function(i){
		$(this).attr("data-tab", "tab" + i);
	});

	$(".b-tabs-content__item").each(function(i){
		$(this).attr("data-tab", "tab" + i);
	});

	$(".b-tabs-navigation__item").click(function(){

		var dataTab = $(this).data("tab");
		var getWrapper = $(this).closest('.b-wrapper-tabs');

		getWrapper.find(".b-tabs-navigation__item").removeClass("active");
		$(this).addClass("active");

		getWrapper.find(".b-tabs-content__item").hide();
		getWrapper.find(".b-tabs-content__item[data-tab=" + dataTab + "]" ).show();
	});

});
