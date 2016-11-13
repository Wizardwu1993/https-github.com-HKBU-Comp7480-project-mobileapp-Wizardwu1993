// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var args = arguments[0] || {};
var sl_id = args.sl_id || {};
Alloy.Collections.webProperties.fetch();

function filterFunction(collection) { 
    return collection.where({id:sl_id});
};

function transformFunction9(model) { 
	
    var transform = model.toJSON();
    if(tranform.estate == "City One Shatin"){
    transform.latitude = "22.386389";
    transform.longitude = "114.203889";
    };
    if(tranform.estate == "Tin Ma Court"){
    transform.latitude = "22.342588";
    transform.longitude = "114.185062";
    };
    if(tranform.estate == "Festival City"){
    transform.latitude = "22.369200";
    transform.longitude = "114.174300";
    };
    return transform; 
};

function btClick9(e) { 
	console.log(e.source.sl_estate);
	console.log(e.source.sl_propertyname);
	var latitude = null;
	var longitude = null;
	if(e.source.sl_estate == "City One Shatin"){
    latitude = "22.386389";
    longitude = "114.203889";
    };
    if(e.source.sl_estate == "Tin Ma Court"){
    latitude = "22.342588";
    longitude = "114.185062";
    };
    if(e.source.sl_estate == "Festival City"){
    latitude = "22.369200";
    longitude = "114.174300";
    };
    console.log(latitude + " " + longitude);
    var addressController = Alloy.createController('address', {
         latitude : latitude, longitude : longitude, estate:e.source.sl_estate, propertyname: e.source.sl_propertyname,
         });
     Alloy.Globals.tabGroup.activeTab.open(addressController.getView());
};

function showDialog(){
	$.dialog.show();
};

function doClick(e){
	Ti.API.info('e.text: ' + e.text);	
}

