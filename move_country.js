function MoveCountry (elements) {
  this.primarySelectElem = elements.primarySelect;
  this.secondarySelectElem = elements.secondarySelect;
  this.addBttnElem = elements.addBttn;
  this.removeBttnElem = elements.removeBttn;
}

MoveCountry.prototype.addToList = function(fromSelectBox, toSelectBox) {
  while(fromSelectBox.options.selectedIndex >= 0) {
    toSelectBox.appendChild(fromSelectBox.options[fromSelectBox.selectedIndex]);
  }
};

MoveCountry.prototype.bindEvents = function() {
  var _this = this;
  this.addBttnElem.addEventListener("click", function() {
    _this.addToList(_this.primarySelectElem, _this.secondarySelectElem);
  });
  this.removeBttnElem.addEventListener("click", function() {
    _this.addToList(_this.secondarySelectElem, _this.primarySelectElem);
  });  
};

window.onload = function() {
  var elements = {
    "primarySelect" : document.getElementById("primaryBox"),
    "secondarySelect" : document.getElementById("secondaryBox"),
    "addBttn" : document.getElementById("Add"),
    "removeBttn" : document.getElementById("Remove")
  };
  var itemMoverObj = new MoveCountry(elements);
  itemMoverObj.bindEvents(); 
};