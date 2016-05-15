
var gif_i = 0,
    line_i = 0,
    poem_i = 0;

var words = [],
    titles = [];

var width = $(window).width(),
	height = $(window).height();

//SETUP
$('#plan-title').css('left', width/2-200 + 'px')
					.css('top', height/2-100 + 'px');
$('#steps').css('left', width/2-200 + 'px')
					.css('top', height/2-70 + 'px');


//CLICK
$('#content').click(function(e){
    
})

//MOUSE MOVE
$('#content').mousemove(function(e){
	updatePlan();
})

$('#info_button').click(function(){
    if ($('#info').css('visibility') == 'hidden') {
        $('#info_button').html('-i')
        $('#info').css('visibility', 'visible')
    } else  {
        $('#info_button').html('+i')
        $('#info').css('visibility', 'hidden')
    }
})

//LOAD Text
$.getJSON( "assets/words.json", function( data ) {
    words = data;
    titles = Object.keys(words);
 });

function updatePlan() {
	$('#plan-code').html("&nbsp"+genTitle());
	$('#step-1').html("1. "+genStep());
	$('#step-2').html("2. "+genStep());
	$('#step-3').html("3. "+genStep());
}

function updateSwatch() {
	$('#swatch').css('background-color','#' + Math.floor(Math.random()*16777215).toString(16));
}

function genTitle() {
	var code = 0 | Math.random() * 1024;
	return String.fromCharCode(20 + code);
}

function genStep() {
	var v = words['verbs'],
		n = words['nouns'],
		i1 = Math.floor(Math.random() * v.length),
		i2 = Math.floor(Math.random() * n.length);
	return v[i1] + " " + n[i2];
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
