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
        },

        addListItem: function(item, type) {
            // orlogo zarlagiin ilementiig aguulsan html-g beltgene.
            var html, list;
            if(type === 'inc' ){
                list = '.income__list';
           html = '<div class="item clearfix" id="income-%id%"><div class="item__description">$$DESCRIPTION$$</div><div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }else{
            list = '.expenses__list';
            html ='<div class="item clearfix" id="expense-%id%"><div class="item__description">$$DESCRIPTION$$</div><div class="right clearfix"> <div class="item__value">$$VALUE$$</div> <div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

        }
            // ter HTML dotroo orlogo zarlagiin utgaguudiig REPLACE ashiglaj oorchilj ogno
            html = html.replace('%id%',item.id);
            html = html.replace('$$DESCRIPTION$$', item.description);
            html = html.replace('$$VALUE$$', item.value);
            // Бэлтгэсэн HTML ээ DOM руу хийж өгнө. 
            document.querySelector(list).insertAdjacentHTML('beforeend', html);

        } 


    };
})();
// Sanhuutei ajillah controller
var financeController = (function(){
    // private data
    var Income = function(id, description, value){
    this.id = id,
    this.description = description;
    this.value = value;
};

   // private data

var Expense = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
};
   // private data
var data = {
    items:{
        inc: [],
        exp: []
    },
    totals:{
        inc: 0,
        exp: 0
    }, 
    
};
return {
    addItem: function(type, desc, val){
      
        var  item , id;
        if(data.items[type].length === 0) id = 1;
        else{
         id = data.items[type][data.items[type].legth - 1].id + 1;
        }
        if(type === "inc"){
         item = new Income(id, desc, val);
        }else{
            item = new Expense(id, desc, val);
        }
      
        return item;
        data.items['type'].push(item);
    },
    seeData: function() {
        return data;
    }
};
})();
//Programmtai ajillah controller heseg
var appController = (function (uiController, financeController) {
    // 1. oruulah ogogdoliig delgetsees olj awah 
    var ctrlAddItem = function () {
        var input = uiController.getInput();
        // 2. olj awsan ogogdoloo oruullah 
        var item = financeController.addItem(input.type, input.description, input.value);
        // 3. Olj awsan ogogdoluudee web deeree tohiroh hesegt gargah
        uiController.addListItem(item,input.type);
        // 4. tosowiig tootsoolono
        // 5.Etsesiin uldegdel tootsoog delgetsend gargana.
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