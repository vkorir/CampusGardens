var map;
var circles = [];
let gardenIds = ["soga", "blake", "clark", "golden", "gill", "casa", "cloyne", "botanical", "oxford", "village", "campus", "multicultural"];
let names = {
    "soga": "Student Organic Garden Association",
    "blake": "Blake Garden",
    "clark": "Clark Kerr Garden",
    "golden": "Golden Garden",
    "gill": "UC Gill Tract Community Farm",
    "casa": "Casa Zimbabwe",
    "cloyne": "Cloyne Court Hotel",
    "botanical": "UC Botanical Garden",
    "oxford": "Oxford Tract",
    "village": "UC Village",
    "campus": "Campus Ecological Action and Sustainable Design Gardens",
    "multicultural": "Multicultural Community Center"
};
var gardens = {
    SOGA: {
        name: "soga",
        center: {
            lat: 37.8776,
            lng: -122.2676
        },
        acreage: 1.5,
        sizeOfHarvest: 3,
        distance: 4
    },
    BlakeGarden: {
        name: "blake",
        center: {
            lat: 37.913539,
            lng: -122.284945
        },
        acreage: 4,
        sizeOfHarvest: 1,
        distance: 1,
        imgId: "blake"
    },
    ClarkCampus: {
        name: "clark",
        center: {
            lat: 37.8641918,
            lng: -122.2491377
        },
        acreage: 1,
        sizeOfHarvest: 3,
        distance: 3
    },
    GoldenGarden: {
        name: "golden",
        center: {
            lat: 37.864455,
            lng: -122.246180
        },
        acreage: 1.5,
        sizeOfHarvest: 1,
        distance: 1
    },
    UCGillTract: {
        name: "gill",
        center: {
            lat: 37.8864,
            lng: -122.2982
        },
        acreage: 2.5,
        sizeOfHarvest: 6,
        distance: 3
    },
    CasaZimbabwe: {
        name: "casa",
        center: {
            lat: 37.875759,
            lng: -122.261298
        },
        acreage: 1,
        sizeOfHarvest: 1,
        distance: 1
    },
    CloyneCourt: {
        name: "cloyne",
        center: {
            lat: 37.876127,
            lng: -122.258085
        },
        acreage: 1,
        sizeOfHarvest: 1,
        distance: 1
    },
    UCBotanicalGarden: {
        name: "botanical",
        center: {
            lat: 37.875163,
            lng: -122.238594
        },
        acreage: 5,
        sizeOfHarvest: 1,
        distance: 1
    },
    OxfordTract: {
        name: "oxford",
        center: {
            lat: 37.874372,
            lng: -122.267515
        },
        acreage: 1.5,
        sizeOfHarvest: 1,
        distance: 3
    },
    UCVillage: {
        name: "village",
        center: {
            lat: 37.874153,
            lng: -122.285295
        },
        acreage: 1,
        sizeOfHarvest: 1,
        distance: 1
    },
    CampusGarden: {
        name: "campus",
        center: {
            lat: 37.873620,
            lng: -122.262651
        },
        acreage: 1,
        sizeOfHarvest: 1,
        distance: 1
    },
    Multicultural: {
        name: "multicultural",
        center: {
            lat: 37.8691,
            lng: -122.2597
        },
        acreage: 1,
        sizeOfHarvest: 1,
        distance: 1
    },
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 37.8895033,
            lng: -122.2607468
        },
        zoom: 14,
        disableDefaultUI: true,
        scrollwheel: false,
        mapTypeId: 'satellite'
    });

    var CampusCoordinates = [{
            lat: 37.867973,
            lng: -122.265532
        },
		{	lat: 37.868103,
		 	lng: -122.265826
		},
		{
			lat: 37.868774,
			lng: -122.266109
		},
		{
			lat: 37.869700,
			lng: -122.265650
		},
		{
			lat: 37.874112,
			lng: -122.266166
		},
		{
			lat: 37.874325,
			lng: -122.264597
		},
		{
			lat: 37.874501,
			lng: -122.264081
		},
		{
			lat: 37.874980,
			lng: -122.260189
		},
		{
			lat: 37.875090,
			lng: -122.259905
		},
		{
			lat: 37.875469,
			lng: -122.256848
		},
		{
			lat: 37.875143,
			lng: -122.256703
		},
		{
			lat: 37.873795,
			lng: -122.255505
		},
		{
			lat: 37.872980,
			lng: -122.254665
		},
		{
			lat: 37.872534,
			lng: -122.253853
		},
		{
			lat: 37.872925,
			lng: -122.253178
		},
		{
			lat: 37.872980,
			lng: -122.252820
		},
		{
			lat: 37.872675,
			lng: -122.252297
		},
		{
			lat: 37.872252,
			lng: -122.251498
		},
		{
			lat: 37.872012,
			lng: -122.250562
		},
		{
			lat: 37.871393,
			lng: -122.249735
		},
		{
			lat: 37.870860,
			lng: -122.249460
		},
		{
			lat: 37.870458,
			lng: -122.249543
		},
		{
			lat: 37.870110,
			lng: -122.249818
		},
		{
			lat: 37.869469,
			lng: -122.249818
		},
		{
			lat: 37.869252,
			lng: -122.252090
		},
		{
			lat: 37.869730,
			lng: -122.252118
		},
		{
			lat: 37.867973,
            lng: -122.265532
		}
    ];
    var Campus = new google.maps.Polygon({
        map: map,
        paths: CampusCoordinates,
        strokeColor: '#3b7ea1',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#3b7ea1',
        fillOpacity: 0.5
    });
    var campusInfoWindow = new google.maps.InfoWindow({
        content: 'UC Berkeley Campus',
        position: {
            lat: 37.871853,
            lng: -122.258423
        }
    });

    google.maps.event.addListener(Campus, 'mouseover', function(event) {
        this.setOptions({
            strokeColor: '#003262',
            fillColor: '#003262'
        });
        campusInfoWindow.open(map);
    });
    google.maps.event.addListener(Campus, 'mouseout', function(event) {
        this.setOptions({
            strokeColor: '#3b7ea1',
            fillColor: '#3b7ea1'
        });
        campusInfoWindow.close();
    });

    for (var garden in gardens) {
        var gardenCircle = new google.maps.Circle({
            name: gardens[garden].name,
            strokeColor: '#afdda4',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillColor: '#afdda4',
            fillOpacity: 0.6,
            map: map,
            center: gardens[garden].center,
            radius: gardens[garden].acreage * 100
        });
		
        gardens[garden].circle = gardenCircle;
        var gardensInfoWindow = new google.maps.InfoWindow();

        google.maps.event.addListener(gardenCircle, 'mouseover', function(event) {
            this.setOptions({
                strokeOpacity: 1.0,
                fillOpacity: 0.8
            });
//            gardensInfoWindow.setContent(names[this.name]);
//            gardensInfoWindow.setPosition(event.latLng);
//            gardensInfoWindow.open(map);
        });
        google.maps.event.addListener(gardenCircle, 'mouseout', function(event) {
            this.setOptions({
                strokeOpacity: 0.8,
                fillOpacity: 0.6
            });
//            gardensInfoWindow.close();
        });
        google.maps.event.addListener(gardenCircle, 'click', function(event) {
            hideInfos();
            document.getElementById(this.name).style.visibility = 'visible';
        });
    }
	map.addListener('click', hideInfos);
}

function hideInfos() {
    for (var id in gardenIds) {
        document.getElementById(gardenIds[id]).style.visibility = 'hidden';
    }
}

function byAcreage() {
    for (var garden in gardens) {
        var radius = gardens[garden].acreage * 100;
        gardens[garden].circle.setRadius(radius);
    }
}

function bySizeOfHarvest() {
    for (var garden in gardens) {
        var radius = gardens[garden].sizeOfHarvest * 100;
        gardens[garden].circle.setRadius(radius);
    }
}

function byDistance() {
    for (var garden in gardens) {
        var radius = gardens[garden].distance * 100;
        gardens[garden].circle.setRadius(radius);
    }
}