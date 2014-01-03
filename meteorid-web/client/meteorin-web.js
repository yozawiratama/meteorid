$(function () {
	var austDay = new Date();
	austDay = new Date(austDay.getFullYear(), 1, 1);
	$('#divCountDown').countdown({until: austDay});

});

$(document).ready(function(){
    $.backstretch(["/images/meteor-shower.jpg",
    "/images/Meteor_shower.jpg"],{fade:750},{duration:4000});
});
