$(function(){
	/*
	$('body').append('Hello World');
	*/
});
$(function(){
	var fr=$('<div/>');
	fr.append($('<div/>',{text:'France'}));
	fr.append($('<img/>',{src:'file:///D:/TutorialAW/static/flags/fr.gif'}));
	$('body').append(fr);

	var br=$('<div/>');
	br.append($('<div/>',{text:'Brazil'}));
	br.append($('<img/>',{src:'file:///D:/TutorialAW/static/flags/br.gif'}));
	$('body').append(br);

	var gr=$('<div/>');
	gr.append($('<div/>',{text:'Greece'}));
	gr.append($('<img/>',{src:'file:///D:/TutorialAW/static/flags/gr.gif'}));
	$('body').append(gr);

});


$(function(){
 	$('img').css('width',200);
	$('img').css('border','3px solid gray');
	

	$('<div/>').css('display','inline-block');
	$('body').css('font-family','arial');
	$('body').css('font-size','x-large');
	$('body>div').css({
		margin:'1ex',border:'2px solid black',
		padding:'24px',width:'206px',
		display:'inline-block'
	});
});
