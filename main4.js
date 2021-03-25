function ItemsListViewModel(){
    let self = this;

    self.items = ko.observableArray([
        // starts empty...
        //"Item 1", "Item 2"
    ]);

    self.fetchItems = function(callback){
        console.log("fetch items!");
        setTimeout(function(){
            let MOCK_RESPONSE = {
                items: [ "I", "found", "some", "items"]
            }
            callback(MOCK_RESPONSE.items);
        }, 400);
    }

    self.onNewItems = function(newItems){
        self.items(newItems);
    }
}

ko.components.register("loading-button", {
    //template: '<button><span>Get Item</span></button>'
    template: [
        '<button data-bind="click: onClick, css: {loading: isLoading}" class="LoadingButton" >',
            '<span data-bind="text: buttonText">Get Items</span>',
        '</button>'
    ].join(""),
    viewModel: function(params){
        let self = this;
        self.buttonText = ko.observable(params.buttonText);

        self.isLoading = ko.observable(false);

        self.onClick = function(){
            self.isLoading(true);
            params.action(function(data){
                console.log(data);
                self.isLoading(false);
                params.onDone(data);
            });
        }
    }
})

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new ItemsListViewModel(), knockoutApp);
