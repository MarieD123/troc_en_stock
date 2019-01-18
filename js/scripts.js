$(document).ready(function () {

	// $('.carousel').carousel({
	// 	interval: false
	// })

	if ($(window).width() > 993) {
		console.log("toto");
		$('.carousel').carousel({
			//pause: true,
			interval: 5000
		});
	};



	if ($(window).width() < 992) {
		console.log("ici");
		$('.carousel').carousel({
			//pause: true,
			interval: false
		});
	};


	$('#nav-1').midnight();

	function setDim() {
		if ($(window).width() > 992) {
			var h = $('.bg-header').height();
			$('.header-top').css({
				'height': h + 'px'
			});
		} else {
			$('.header-top').css({
				'height': 'auto'
			});
		}
	}
	setDim();
	$(window).resize(function () {
		setDim();
	});


	$('#map').vectorMap({
		map: 'fr_regions_merc',
		scaleColors: ['#C8EEFF', '#0071A4'],
		normalizeFunction: 'polynomial',
		hoverOpacity: 0.7,
		hoverColor: false,
		zoomOnScroll: false,
		markerStyle: {
			initial: {
				fill: '#FFDB4D',
				stroke: '#383f47',
				r: 7
			}
		},
		backgroundColor: 'white', //couleur du fond de la carte
		regionStyle: {
			initial: {
				fill: '#3C3C3C' // couleur du bg des régions
			},
			hover: {
				fill: 'black',
				cursor: 'pointer'
			}
		},

		markers: [ //tous les magasins repérés par leurs latitudes et longitudes
			{
				latLng: [43.73, 7.41],
				name: 'Monaco'
			},
			{
				latLng: [44.8, -0.6],
				name: 'Bordeaux'
			},
			{
				latLng: [43.6, 3.89],
				name: 'Montpellier'
			}
		],

		//bidouillage pour afficher les infos des magasins
		onMarkerTipShow: function (event, label, index) {
			label.html(
				'<center><b>' + 'BORDEAUX' + '</b><br/></br>' +
				'<b>adresse: </b></br>' + '25 rue Jacques Prévert' + '</br>' + '330000 Bordeaux' + '</br>' + '</br>' +
				'<b>Téléphone: </b></br>' + '01 23 45 67 89' + '</center>'
			);
		},

		//bidouillage pour que le nom des régions ne s'affiche pas au survol
		onRegionTipShow: function () {
			label.html(
				''
			);
		},

	});

	$(".menu-collapsed").click(function () {
		$(this).toggleClass("menu-expanded");
	});

});