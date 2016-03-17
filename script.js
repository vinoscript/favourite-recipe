$(document).ready(function(){

	console.log("Script included!");	
	
	alert('Hello there! Welcome to my recipe page.');

	$('<input type="checkbox" value="1" />').prependTo('li');

	$('button').click(function(){
		$('img').toggle(1000);
	});

	$('#footer').draggable();

});




