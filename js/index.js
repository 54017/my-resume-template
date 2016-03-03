var Chart = require("./Chart.min.js");
require("../less/index.less");

var locals = require("../resume.json");

var template = require("../jade/resume.jade")(locals);

template = template.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/`(.+?)`/g, '<strong>$1</strong>');

document.getElementsByTagName('body')[0].innerHTML = template;

document.title = locals.resume_title;

var init = function() {
	var ctx = document.getElementById('radar').getContext('2d');
	var data = {
	    labels: locals.radar.ability,
	    datasets: [
	           {
		            label: "My Second dataset",
		            fillColor: "rgba(126, 206, 253, 0.4)",
		            strokeColor: "rgb(126,206,253)",
		            pointColor: "rgba(255 ,255 ,255 ,1)",
		            pointStrokeColor: "rgb(126,206,253)",
		            pointHighlightFill: "rgb(126,206,253)",
		            pointHighlightStroke: "rgb(126,206,253)",
		            data: locals.radar.magnitude
		        }
	    ]
	};
	var chartOptions = {
		pointLabelFontSize : 14,
	  	angleLineColor : "rgba(205 ,209 ,211 ,1)",
	  	pointLabelFontColor : "rgba(255 ,255 ,255 ,1)",
	  	pointLabelFontFamily : "'Roboto Slab', serif",
	  	scaleLineColor:"rgba(205 ,209 ,211 ,1)"
	};

	var myRadarChart = new Chart(ctx).Radar(data, chartOptions);

	var rightBlock = document.getElementsByClassName('right-block')[0];
	var leftBlock = document.getElementsByClassName('left-block')[0];
	var rightHeight = parseInt(rightBlock.offsetHeight),
		leftHeight = parseInt(leftBlock.offsetHeight);
	var max;
	if (rightHeight > leftHeight) {
		max  = rightHeight + 50;
	} else {
		console.log(max);
		max = leftHeight;
	}
	leftBlock.style.height = max + "px";
	rightBlock.style.height = max + "px";
}	

window.onload = init;
