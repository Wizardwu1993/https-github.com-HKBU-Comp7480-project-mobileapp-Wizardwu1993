$.index.open();

Alloy.Collections.webProperties.fetch();
function transformFunction(model) { 
    var transform = model.toJSON(); 
    
    if (transform.image == null)
        transform.image = "http://gemstatepatriot.com/blog/wp-content/uploads/2015/11/default.jpg";     
        // a default picture

    return transform; 
}

Alloy.Collections.property.fetch();


Alloy.Globals.tabGroup = $.index;

function tableClick1(e) {
	console.log("Table Clicked");
	console.log(e.row.title);
    var propertyListController = Alloy.createController('propertyList', {
        operation : e.row.operation
        });
    $.index.activeTab.open(propertyListController.getView());
};

function tableClick2(e) {
	console.log(e.row.op_id);
	if(e.row.op_id !== "City One Shatin" && e.row.op_id !== "Festival City" && e.row.op_id !== "Tin Ma Court" )
	return alert("Waiting for us!");
    var estateListController = Alloy.createController('estateList', {
        operation : e.row.op_id
        });
    $.index.activeTab.open(estateListController.getView());
};

function mapClicked(e) {
    
    if (e.clicksource == 'rightButton' && e.annotation.title == 'Tin Ma Court') {
	console.log("operation is " + e.annotation.title);
    var estateListController = Alloy.createController('estateList', {
        operation : e.annotation.title
        });
    $.index.activeTab.open(estateListController.getView());     
    };

    if (e.clicksource == 'rightButton' && e.annotation.title == 'Festival City') {
	console.log("operation is " + e.annotation.title);
    var estateListController = Alloy.createController('estateList', {
        operation : e.annotation.title
        });
    $.index.activeTab.open(estateListController.getView());     
    };
    
    if (e.clicksource == 'rightButton' && e.annotation.title == 'City One Shatin') {
	console.log("operation is " + e.annotation.title);
    var estateListController = Alloy.createController('estateList', {
        operation : e.annotation.title
        });
    $.index.activeTab.open(estateListController.getView());     
    }   
};

function userClick(e) {
	if( e.row.op == "au")
	return alert("No such company！");
	if( e.row.op == "ll")
	{
		    var xhr = Ti.Network.createHTTPClient();
		    xhr.onload = function(e) {
		        //handle response, which at minimum will be an HTTP status code
		        var json = JSON.parse(this.responseText);
		        alert(json.collect[1].propertyname);
		    };
		    xhr.open('POST','http://localhost:1337/view/property/members');
		    xhr.send({
		        "Member[name]":'admin',
		        "Member[password]":'123456'
    		});
	};

    
};