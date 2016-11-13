// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var args = arguments[0] || {};
var agrs_latitude = args.latitude || {};
var agrs_longitude = args.longitude || {};
var agrs_estate = args.estate || {};
var agrs_propertyname = args.propertyname || {};

  
var win = Titanium.UI.createWindow();

var mountainView = Alloy.Globals.Map.createAnnotation({
    latitude:agrs_latitude,
    longitude:agrs_longitude,
    title:agrs_propertyname,
    subtitle:agrs_estate,
    pincolor:Alloy.Globals.Map.ANNOTATION_GREEN,
    animate:true,
    myid:1
});


var mapview = Alloy.Globals.Map.createView({
    mapType: Alloy.Globals.Map.STANDARD_TYPE,
    region: {latitude:agrs_latitude, longitude:agrs_longitude,
             latitudeDelta:0.09, longitudeDelta:0.09},
    animate:true,
    regionFit:true,
    userLocation:true,
    annotations:[mountainView]
});

$.win.add(mapview); 

if(sl_id == "City One Shatin") 
$.mapView.region = {
	latitude : 22.386389, 
    longitude : 114.203889,
    latitudeDelta : 0.007,
    longitudeDelta : 0.007 
};

if(sl_id == "Tin Ma Court") 
$.mapView.region = {
	latitude : 22.342588, 
    longitude : 114.185062,
    latitudeDelta : 0.007,
    longitudeDelta : 0.007 
};

if(sl_id == "Festival City") 
$.mapView.region = {
	latitude : 22.369200, 
    longitude : 114.174300,
    latitudeDelta : 0.007,
    longitudeDelta : 0.007 
};

