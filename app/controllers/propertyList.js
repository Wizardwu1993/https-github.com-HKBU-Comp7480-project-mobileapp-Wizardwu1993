// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var args = arguments[0] || {};
var operation = args.operation || {};
 
Alloy.Collections.webProperties.fetch();

function filterFunction(collection) {
    if(operation == "a") 
    return collection.filter(function(model){
    	return (model.get("rent") <= 15000 &&
    	        model.get("bedrooms") <= 2);
    });
    if(operation == "b")
    return collection.filter(function(model){
    	return (model.get("rent") <= 15000 &&
    	        model.get("bedrooms") >= 3);
    });
    if(operation == "c") 
    return collection.filter(function(model){
    	return (model.get("rent") >= 15000 &&
    	        model.get("bedrooms") <= 2);
    });	        
    if(operation == "d")
    return collection.filter(function(model){
    	return (model.get("rent") >= 15000 &&
    	        model.get("bedrooms") >= 3);
    });	            
};


function propertyClick(e) {
	console.log("Property id is " + e.row.sl_id);
    var propertyController = Alloy.createController('property', {
        sl_id : e.row.sl_id,
        });
    Alloy.Globals.tabGroup.activeTab.open(propertyController.getView());
};