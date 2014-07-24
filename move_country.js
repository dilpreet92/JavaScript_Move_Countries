function checkEvent(getElements) {
  this.primarySelectElem = getElements.primarySelect;
  this.secondarySelectElem = getElements.secondarySelect;
  this.addBttnElem = getElements.addBttn;
  this.removeBttnElem = getElements.removeBttn;
  this.selectedItem = ""; 
}

checkEvent.prototype.addToList = function(fromSelectBox, toSelectBox) {
  this.selectedItem = fromSelectBox.options[fromSelectBox.selectedIndex];
  if (!fromSelectBox.options.length) {
    alert("No Items Present");
  } else if (!this.selectedItem) {
    alert("Please Select an item");
  }
  toSelectBox.appendChild(this.selectedItem);
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