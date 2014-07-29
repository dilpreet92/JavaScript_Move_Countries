function checkEvent(getElements) {
  this.primarySelectElem = getElements.primarySelect;
  this.secondarySelectElem = getElements.secondarySelect;
  this.addBttnElem = getElements.addBttn;
  this.removeBttnElem = getElements.removeBttn;
  this.selectedItem = ""; 
}

checkEvent.prototype.addToList = function(fromSelectBox, toSelectBox) {
  for (var i =0 ; i < fromSelectBox.options.length ;) {
    if(fromSelectBox.options[i].selected) {
      toSelectBox.appendChild(fromSelectBox.options[i]);
    }
    else {
      i++;
    }
  }
};

checkEvent.prototype.bindEvents = function() {
  var _this = this;
  this.addBttnElem.addEventListener("click", function() {
    _this.addToList(_this.primarySelectElem, _this.secondarySelectElem);
  });
  this.removeBttnElem.addEventListener("click", function() {
    _this.addToList(_this.secondarySelectElem, _this.primarySelectElem);
  });  
};

function createItemMover(getElements) {
  var itemMover = new checkEvent(getElements);
  itemMover.bindEvents();
}
var elements = {
  "primarySelect" : document.getElementById("primaryBox"),
  "secondarySelect" : document.getElementById("secondaryBox"),
  "addBttn" : document.getElementById("Add"),
  "removeBttn" : document.getElementById("Remove")
};  
window.onload = createItemMover(elements);