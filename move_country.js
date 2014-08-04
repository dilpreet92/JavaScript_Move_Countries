function MoveCountry (elements) {
  this.primarySelectElem = elements.primarySelect;
  this.secondarySelectElem = elements.secondarySelect;
  this.addBttnElem = elements.addBttn;
  this.removeBttnElem = elements.removeBttn;
}

MoveCountry.prototype.addToList = function(fromSelectBox, toSelectBox) {
  var fragment = document.createDocumentFragment();
  for (var i = 0 ; i < fromSelectBox.options.length ;) {
    if (fromSelectBox.options[i].selected) {
      fragment.appendChild(fromSelectBox.options[i]);
    }
    else {
      i++;
    }
  }
  toSelectBox.appendChild(fragment);
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