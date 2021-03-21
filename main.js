// create a view model

function CounterViewModel() {
    let self = this;
    self.userName = ko.observable("Wayne");

    self.count = ko.observable(0);

    self.increase = function(){
        let currentValue = self.count();
        self.count(currentValue + 1);
    };

    self.decrease = function(){
        let currentValue = self.count();
        if(currentValue > 0){
            self.count(currentValue - 1);
        }
    }; 

    self.dogStatus = ko.computed(function(){
        if(self.count() === 0){
            return "DISSAPOINTED";
        }
        else if(self.count() <= 5 || self.count > 0){
            return "Observing";
        }
        else if(self.count() >= 5){
            return "THRILLED";
        }
    });
};

// get knockout initialized on a page - unless components are entering and leaving the page
const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new CounterViewModel(), knockoutApp);