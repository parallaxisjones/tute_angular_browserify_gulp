module.inject = function(app){
  	app.constant('FETCH_EVENTS', module.constant);
  	app.constant('fetch.config.events', exports.constant);
  	
  	return exports.constant;	
}

module.constant = function(){
	var eventNamespace = "fetch";
	var eventDelimeter = "::"
	{
    global: {
        stateChange: eventNamespace + "state"+ eventDelimeter+"change",
        next: eventNamespace + "state"+ eventDelimeter+"next"
    },
    account:{
        login: eventNamespace + "account" + eventDelimeter + "login",
        logout: eventNamespace + "account" + eventDelimeter + "logout",
        signup: eventNamespace + "account" + eventDelimeter + "signup",
        error: eventNamespace + "account" + eventDelimeter + "error",
    },
    site: {
        click: eventNamespace + "site" + eventDelimeter + "click",
        create: eventNamespace + "site" + eventDelimeter + "create",
        createComplete: eventNamespace + "site" + eventDelimeter + "createComplete",
        update: eventNamespace + "site" + eventDelimeter + "update",
        updateComplete: eventNamespace + "site" + eventDelimeter + "updateComplete",
        remove: eventNamespace + "site" + eventDelimeter + "remove",
        removeComplete: eventNamespace + "site" + eventDelimeter + "removeComplete",
        error: eventNamespace + "site" + eventDelimeter + "error",
        card: {
            open: eventNamespace + "site" + eventDelimeter + "card" + eventDelimeter + "open",
            close: eventNamespace + "site" + eventDelimeter + "card" + eventDelimeter + "close",
            update: eventNamespace + "site" + eventDelimeter + "card" + eventDelimeter + "updated",
            updateComplete: eventNamespace + "site" + eventDelimeter + "card" + eventDelimeter + "updateComplete",
        }
    },
    project: {
        click: eventNamespace + "project" + eventDelimeter + "click",
        create: eventNamespace + "project" + eventDelimeter + "create",
        createComplete: eventNamespace + "project" + eventDelimeter + "createComplete",
        update: eventNamespace + "project" + eventDelimeter + "update",
        updateComplete: eventNamespace + "project" + eventDelimeter + "updateComplete",
        remove: eventNamespace + "project" + eventDelimeter + "remove",
        removeComplete: eventNamespace + "project" + eventDelimeter + "removeComplete",
        error: eventNamespace + "project" + eventDelimeter + "error",
        save: eventNamespace + "project" + eventDelimeter + "save",
    },
    map: {},
    product: {
        click: eventNamespace + "product" + eventDelimeter + "click",
        create: eventNamespace + "product" + eventDelimeter + "create",
        createComplete: eventNamespace + "product" + eventDelimeter + "createComplete",
        update: eventNamespace + "product" + eventDelimeter + "update",
        updateComplete: eventNamespace + "product" + eventDelimeter + "updateComplete",
        remove: eventNamespace + "product" + eventDelimeter + "remove",
        removeComplete: eventNamespace + "product" + eventDelimeter + "removeComplete",
    }
}
}