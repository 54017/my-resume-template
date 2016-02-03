(function() {

	var init = function() {
		var rightBlock = document.getElementsByClassName('right-block')[0];
		var leftBlock = document.getElementsByClassName('left-block')[0];
		var leftHeight = parseInt(rightBlock.offsetHeight) + 30;
 		leftBlock.style.height = leftHeight + "px";
		var ctx = document.getElementById('radar').getContext('2d');
		var data = {
		    labels: ["HTML", "JavaScript", "CSS", "Three.js", "WebGL", "Node.js", "Python"],
		    datasets: [
		           {
			            label: "My Second dataset",
			            fillColor: "rgba(126, 206, 253, 0.4)",
			            strokeColor: "rgb(126,206,253)",
			            pointColor: "rgba(255 ,255 ,255 ,1)",
			            pointStrokeColor: "rgb(126,206,253)",
			            pointHighlightFill: "rgb(126,206,253)",
			            pointHighlightStroke: "rgb(126,206,253)",
			            data: [90, 90, 80, 60, 50, 80, 70]
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
	}	

	window.onload = init;
}())