$(function () {
	var austDay = new Date();
	austDay = new Date(austDay.getFullYear() + 1, 1, 1);
	$('#divCountDown').countdown({until: austDay});
});

//$("#header").backstretch("/images/meteor-shower.jpg");