function InventoryViewModel(){
    let self = this;

    let iconTypes = [
        {icon: "icon-bone", text: "Bone"},
        {icon: "icon-ball", text: "Ball"},
        {icon: "icon-circle", text: "Circle"},
        {icon: "icon-rabbit", text: "Rabbit"}
    ];

    // property which is being diplayed on the app
    self.inventory = ko.observableArray([
        
    ]);

    // add random item
    self.addItem = function(){
        let index = Math.floor(Math.random() * iconTypes.length);

        // push item into the inventory
        self.inventory.push(iconTypes[index]);
    };

    self.removeItem = function(data, event){
        // select an item from inventory which has been clicked, click event
        let removeItem = event.target.getAttribute("item-index");

        // remove this item using splice method
        self.inventory.splice(removeItem, 1);
    };
};

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new InventoryViewModel, knockoutApp);