// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var args = arguments[0] || {};
var operation = args.operation || {};
 
Alloy.Collections.webProperties.fetch();

function filterFunction(collection) {
    if(operation == "City One Shatin") 
    return collection.where({estate:"City One Shatin"});
    if(operation == "Festival City")
    return collection.where({estate:"Festival City"});
    if(operation == "Tin Ma Court") 
	return collection.where({estate:"Tin Ma Court"});        	            
};

function estateClick1(e) {
	console.log("Property id is " + e.row.sl_id);
    var propertyController = Alloy.createController('property', {
        sl_id : e.row.sl_id,
        });
    Alloy.Globals.tabGroup.activeTab.open(propertyController.getView());
}