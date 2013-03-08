var xAngle = 90, yAngle = 0;
var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
prop,
el = document.createElement('div'),
inactivity = 1000,
interval = setInterval( function(){activityTimer();}, inactivity );

for(var i = 0, l = props.length; i < l; i++) {
	if(typeof el.style[props[i]] !== "undefined") {
		prop = props[i];
		break;
	}
}
document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";

function isLeft() {
	return ( yAngle == 90 && xAngle == 0 );
} 
function isRight() {
	return ( yAngle == -90 && xAngle == 0 );
} 
function isTop() {
	return ( yAngle == 0 && xAngle == -90 );
} 
function isBottom() {
	return ( yAngle == 0 && xAngle == 90 );
}
function isFront() {
	return ( yAngle == 0 && xAngle == 0 );
}

function leftPanel() {
	return document.getElementById('left');
}

function rightPanel() {
	return document.getElementById('right');
}

function bottomPanel() {
	return document.getElementById('bottom');
}

function frontPanel() {
	return document.getElementById('front');
}

function topPanel() {
	return 	document.getElementById('top');
}

function activityTimer( ) {
	clearInterval(interval);
	if ( isLeft() === true )
		document.getElementById('cube').style[prop] += "translateX(-120px)"; 
	else
		leftPanel().style.opacity = 0.0;
	if ( isRight() === true  )
		document.getElementById('cube').style[prop] += "translateX(120px)";
	else
		rightPanel().style.opacity = 0.0;
	if ( isFront() === true )
		document.getElementById('cube').style[prop] += "translateZ(120px)";
	else
		frontPanel().style.opacity = 0.0;
	if ( isTop() === true )
		document.getElementById('cube').style[prop] += "translateY(-120px)";
	else
		topPanel().style.opacity = 0.0;
	if ( isBottom() === true )
		document.getElementById('cube').style[prop] += "translateY(120px)";
	else
		bottomPanel().style.opacity = 0.0;
	if ( isFront() ) {
		document.getElementById('front').style.width = "1070px";
		document.getElementById('cube').style[prop] += "translateX(-285px)"; 
	}
}

function showAllPanels() {
	leftPanel().style.opacity = 1.0;
	rightPanel().style.opacity = 1.0;
	frontPanel().style.opacity = 1.0;
	topPanel().style.opacity = 1.0;
	bottomPanel().style.opacity = 1.0;
}

function keydownEvent( evt ) {
	var pressed = false;
	if ( isFront() && ( evt.keyCode == 65 || evt.keyCode == 87 || evt.keyCode == 68 || evt.keyCode == 83 ) ) {
		document.getElementById('front').style.width = "100%";
		document.getElementById('cube').style[prop] = "translateX(250px)";
	}
    switch(evt.keyCode) {
        case 65: // left
					if ( isFront() === true || isRight() === true ) {
						$('#price_to').blur();
						pressed = true;
						yAngle += 90;
						zoomIn();
					}
					else if ( isTop() === true ) {
						pressed = true;
						xAngle += 90;
						yAngle += 90;
						zoomIn();
					}
					else if ( isBottom() === true ) {
						pressed = true;
						xAngle -= 90;
						yAngle += 90;
						zoomIn();
					}
					break;

        case 87: // up
					if ( isFront() === true || isBottom() === true )
					{
						pressed = true;
						xAngle -= 90;
						zoomIn();
					}
					else if ( isLeft ( ) === true )
					{
						pressed = true;
						xAngle -= 90;
						yAngle -= 90;
						zoomIn();
					}
					else if ( isRight ( ) === true )
					{
						pressed = true;
						xAngle -= 90;
						yAngle += 90;
						zoomIn();
					}
					break;

        case 68: // right
					if ( isFront() === true || isLeft() === true ) {
						pressed = true;
						yAngle -= 90;
						zoomIn();
					}
					else if ( isTop() === true ) {
						pressed = true;
						xAngle += 90;
						yAngle -= 90;
						zoomIn();
					}
					else if ( isBottom() === true ) {
						pressed = true;
						xAngle -= 90;
						yAngle -= 90;
						zoomIn();
					}
					break;
			
        case 83: // down
					if ( isFront() === true || isTop() === true ) {
						pressed = true;
						xAngle += 90;
						zoomIn();
					}
					else if ( isLeft ( ) === true )
					{
						pressed = true;
						xAngle += 90;
						yAngle -= 90;
						zoomIn();
					}
					else if ( isRight ( ) === true )
					{
						pressed = true;
						xAngle += 90;
						yAngle += 90;
						zoomIn();
					}
					break;
    };
	if ( pressed === true )
		document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}

function zoomIn ( )
{
	document.getElementById('cube').style.width = "500px";
	clearInterval(interval);
	showAllPanels();
	interval = setInterval(function(){activityTimer();}, inactivity);
}

$('body').keydown( function (evt){ keydownEvent(evt); }  );

$(document).ready(function() {
	$("input:checkbox").prop('checked', false);
	$("#price_checkbox").prop('checked', true);
});

$('#free_toggler')
	.click(function() {
		var state = ($('#price_checkbox').prop('checked'));
		if(state){
			state = true;
			$("#price_selector").fadeOut(1000);
		}
		else{
			state = false;
			$("#price_selector").fadeIn(2000);
		}
	} );


var monday, tuesday, wednesday, thursday, friday, saturday, sunday;
monday = tuesday = wednesday = thursday = friday = saturday = sunday = false;

$('#monday_toggler').click(function() {
	if ( ! document.getElementById('checkbox-monday').checked )
		document.getElementById('checkbox-wholeweek').checked = false;
	} );

$('#tuesday_toggler').click(function() {
	if ( ! document.getElementById('checkbox-tuesday').checked )
		document.getElementById('checkbox-wholeweek').checked = false;
	} );

$('#wednesday_toggler').click(function() {
	if ( ! document.getElementById('checkbox-wednesday').checked )
		document.getElementById('checkbox-wholeweek').checked = false;
	} );

$('#thursday_toggler').click(function() {
	if ( ! document.getElementById('checkbox-thursday').checked )
		document.getElementById('checkbox-wholeweek').checked = false;
	} );

$('#friday_toggler').click(function() {
	if ( ! document.getElementById('checkbox-friday').checked )
		document.getElementById('checkbox-wholeweek').checked = false;
	} );

$('#saturday_toggler').click(function() {
	if ( ! document.getElementById('checkbox-saturday').checked )
		document.getElementById('checkbox-wholeweek').checked = false;
	} );

$('#sunday_toggler').click(function() {
	if ( ! document.getElementById('checkbox-sunday').checked )
		document.getElementById('checkbox-wholeweek').checked = false;
	} );

$('#checkbox-wholeweek')
	.click(function() {
		if ( ! document.getElementById('checkbox-wholeweek').checked )
		{
			document.getElementById('checkbox-monday').checked = monday;
			document.getElementById('checkbox-tuesday').checked = tuesday;
			document.getElementById('checkbox-wednesday').checked = wednesday;
			document.getElementById('checkbox-thursday').checked = thursday;
			document.getElementById('checkbox-friday').checked = friday;
			document.getElementById('checkbox-saturday').checked = saturday;
			document.getElementById('checkbox-sunday').checked = sunday;
		}
		else
		{
			monday = document.getElementById('checkbox-monday').checked;
			tuesday = document.getElementById('checkbox-tuesday').checked;
			wednesday = document.getElementById('checkbox-wednesday').checked;
			thursday = document.getElementById('checkbox-thursday').checked;
			friday = document.getElementById('checkbox-friday').checked;
			saturday = document.getElementById('checkbox-saturday').checked;
			sunday = document.getElementById('checkbox-sunday').checked;
			document.getElementById('checkbox-monday').checked = true;
			document.getElementById('checkbox-tuesday').checked = true;
			document.getElementById('checkbox-wednesday').checked = true;
			document.getElementById('checkbox-thursday').checked = true;
			document.getElementById('checkbox-friday').checked = true;
			document.getElementById('checkbox-saturday').checked = true;
			document.getElementById('checkbox-sunday').checked = true;
		}
	} );

/*$('#checkbox-wholeweek')
	.click(function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}*/

function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode;
	 //46  is decimal point, 48 is 0, 57 is 9
   //if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
	 if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

   return true;
}
