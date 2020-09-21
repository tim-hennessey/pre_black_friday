var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax();

	var mask1a = document.getElementById('mask1a');
	var mask1b = document.getElementById('mask1b');
	var mask1c = document.getElementById('mask1c');
	var mask2a = document.getElementById('mask2a');
	var mask2b = document.getElementById('mask2b');
	var mask2c = document.getElementById('mask2c');

	var img18 = document.getElementById('img18');
	var buttonExit = document.getElementById('button-exit');
	// var endFrame = document.getElementById('end-frame');
	

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set(".end-frame", {opacity:1});
		t.set(leftHalf, {transformOrigin:"203px 600px"});
		t.set(rightHalf, {transformOrigin:"203px 600px"});
		// t.set(img01, {visibilty:"visible"});


		buttonExit.addEventListener('mouseover', function () {
            t.to(".cta-txt", .25, {fill: "rgb(219,58,38)"});
            t.to(".cta-bg", .25, {fill: "rgb(255,255,255)"});

        });
        buttonExit.addEventListener('mouseout', function () {
            t.to(".cta-txt", .25, {fill: "rgb(255,255,255)"});
            t.to(".cta-bg", .25, {fill: "rgb(219,58,38)"});

        });

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {


		tl1.set(img05, {visibility:"hidden"}, "+=.5")

		.set(img04, {visibility:"visible"})
		.set(img04, {visibility:"hidden"}, "+=.5")

		.set(img03, {visibility:"visible"})
		.set(img03, {visibility:"hidden"}, "+=.5")

		.set(img02, {visibility:"visible"})
		.set(img02, {visibility:"hidden"}, "+=.5")

		.set(img01, {visibility:"visible"})
		.set(img01, {visibility:"hidden"}, "+=.2")

		.set(img02, {visibility:"visible"})
		.set(img02, {visibility:"hidden"}, "+=.2")

		.set(img03, {visibility:"visible"})
		.set(img03, {visibility:"hidden"}, "+=.2")

		.set(img04, {visibility:"visible"})
		.set(img04, {visibility:"hidden"}, "+=.2")

		.set(img05, {visibility:"visible"})
		.set(img05, {visibility:"hidden"}, "+=.2")

		.set(img06, {visibility:"visible"})
		.set(img06, {visibility:"hidden"}, "+=.2")

		.set(img07, {visibility:"visible"})
		.set(img07, {visibility:"hidden"}, "+=.2")

		.set(img08, {visibility:"visible"})
		.set(img08, {visibility:"hidden"}, "+=.5")

		.set(img09, {visibility:"visible"});
		
		

		
		


		tl2.to(catContainer, .75, {y:"-=250", ease:Circ.easeInOut}, "+=3")
		.to(catContainer, .5, {y:"+=600", ease:Circ.easeIn})

		.to(mask1a, .75, {morphSVG:"#mask1b", ease:Circ.easeInOut}, "-=.35")
		.to(mask2a, .75, {morphSVG:"#mask2b", ease:Circ.easeInOut}, "-=.75")


		.to(leftHalf, .5, {y:"+=250", rotation: "-90", ease:Circ.easeIn}, "-=.25")
		.to(rightHalf, .5, {y:"+=250", rotation: "120", ease:Circ.easeIn}, "-=.5");


		
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
