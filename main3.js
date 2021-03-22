function CreateAccountViewModel(){
    let self = this;

    self.firstName = ko.observable("").extend({
       required: true,
       minLength: 2
        /*  validation: {
            required: true,
            message: "Please enter at least 2 characters",
            validator: function(value){
                return value.length > 1;
            } 
        }*/
    });

    self.emailAddress = ko.observable("").extend({
        required: true,
        email: true
    });

    self.subscriptionType = ko.observable("pro");

    self.hasBeenSubmitted = ko.observable(false);

    self.handleSubmit = function(){
        let errors = ko.validation.group(self);
        if(errors().length > 0){
            errors.showAllMessages();
            return;
        }
        else{
            let payload = {
                firstName: self.firstName(),
                email: self.emailAddress(),
                subscriptionType: self.subscriptionType()
            };
            console.log(payload);
            self.hasBeenSubmitted(true);
        }
    };
};

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new CreateAccountViewModel(), knockoutApp);