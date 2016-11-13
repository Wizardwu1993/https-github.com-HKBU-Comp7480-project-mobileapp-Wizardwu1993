exports.definition = {
	config : {
    "columns": {
        "id":"INTEGER PRIMARY KEY",
        "estatetitle":"text", 
        "url":"text", 
        "bedroom":"text",
        "area":"text",
        "tenants":"text",
        "rent":"text",
    },
    
    "URL": "http://localhost:1337/property/json", 
    
    "debug": 1, //debug mode enabled

    "adapter" : {
        "type" : "sqlrest",
        "collection_name" : "property", 
        "idAttribute" : "id",
        
        // optimise the amount of data transfer from remote server to app
        "addModifedToUrl": true,
        "lastModifiedColumn": "modified"
    },
},






extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};