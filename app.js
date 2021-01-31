// delgetstei ajillah controller
var uiController = (function () {
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn" 
    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        }


    };
})();
// Sanhuutei ajillah controller
var financeController = (function () {
    var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
};
var expense = function(){
    this.id = id;
    this.description = description;
    this.value = value;
};
var data = {
    allItems:{
        inc:[],
        exp:[]
    },
    totals:{
        inc: 0,
        exp: 0
    }, 
    
}
})();
//Programmtai ajillah controller heseg
var appController = (function (uiController, financeController) {
    
    var ctrlAddItem = function () {
        console.log(uiController.getInput());
    };
   var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();
    document.querySelector(DOM.addBtn).addEventListener("click", function () {
        ctrlAddItem();
    });
    document.querySelector("keypress", function (event) {
        if (event.keyCode === 13 || event.wich === 13) {
            ctrlAddItem();
        }
    });
   }


   return {
       init: function(){
           console.log ('Application started...');
           setupEventListeners();
       }
   }

})(uiController, financeController);
appController.init();