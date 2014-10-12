$(document).ready(function(){

	var names = [
		"Andy",
		"Andrew",
		"Bob",
		"Bobby",
		"Chuck",
		"Charles",
		"David"
	];

	$('#autocomplete').autocomplete({source:names});
});
