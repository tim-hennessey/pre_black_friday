var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var end = document.getElementsByClassName('end-frame');
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax();

	
	var buttonExit = document.getElementById('button-exit');
	

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		// t.set(end, {opacity:1, visible:"visible"});
		t.to(".end-frame", .1, {opacity:1, delay:1.5});
		


		buttonExit.addEventListener('mouseover', function () {
            t.to(".cta-txt", .15, {fill: "rgb(219,58,38)"});
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


		tl1.set(img01, {visibility:"hidden"}, "+=1.5")

		.set(img02, {visibility:"visible"})
		.set(img02, {visibility:"hidden"}, "+=.1")

		.set(img03, {visibility:"visible"})
		.set(img03, {visibility:"hidden"}, "+=.1")

		.set(img04, {visibility:"visible"})
		.set(img04, {visibility:"hidden"}, "+=.1")

		.set(img05, {visibility:"visible"})
		.set(img05, {visibility:"hidden"}, "+=.1")

		.set(img06, {visibility:"visible"})
		.set(img06, {visibility:"hidden"}, "+=.1")

		.set(img07, {visibility:"visible"})
		.set(img07, {visibility:"hidden"}, "+=.1")

		.set(img08, {visibility:"visible"})
		.set(img08, {visibility:"hidden"}, "+=.1")

		.set(img09, {visibility:"visible"})
		.set(img09, {visibility:"hidden"}, "+=.1")

		.set(img10, {visibility:"visible"})
		.set(img10, {visibility:"hidden"}, "+=.1")

		.set(img11, {visibility:"visible"})
		.set(img11, {visibility:"hidden"}, "+=.1")

		.set(img12, {visibility:"visible"})
		.set(img12, {visibility:"hidden"}, "+=.1")

		.set(img13, {visibility:"visible"})
		.set(img13, {visibility:"hidden"}, "+=.05")

		.set(img14, {visibility:"visible"})
		.set(img14, {visibility:"hidden"}, "+=.05")

		.set(img15, {visibility:"visible"})
		.set(img15, {visibility:"hidden"}, "+=.05")

		.set(img16, {visibility:"visible"})
		.set(img16, {visibility:"hidden"}, "+=.05")

		.set(img17, {visibility:"visible"})
		.set(img17, {visibility:"hidden"}, "+=.05")

		.set(img18, {visibility:"visible"})
		.set(img18, {visibility:"hidden"}, "+=1")

		.set(img19, {visibility:"visible"});
		
		

		tl2.to(catContainer, .5, {y:"-=250", ease:Circ.easeOut}, "+=2.7")
		.to(catContainer, 1, {y:"+=600", ease:Circ.easeIn},"+=.1")

		.to(mask1, 1.5, {x:"-=300", ease:Circ.easeIn}, "-=1.2")
		.to(mask2, 1.5, {x:"+=300", ease:Circ.easeIn}, "-=1.5");


		

		
		
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
