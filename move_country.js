function MoveItem() {
  this.selectedItem = ""; 
}

MoveItem.prototype.addToList = function(fromSelectBox, toSelectBox) {
  this.selectedItem = fromSelectBox.options[fromSelectBox.selectedIndex];
  if (!fromSelectBox.options.length) {
    alert("No Items Present");
  }
  else if (!this.selectedItem) {
    alert("Please Select an item");
  }
  toSelectBox.appendChild(this.selectedItem);
  fromSelectBox.removeChild(this.selectedItem);
};

MoveItem.prototype.bindEvents = function() {
  var _this = this;
  addBttn.addEventListener("click", function() {
    _this.addToList(primarySelect, secondarySelect);
  });
  removeBttn.addEventListener("click", function() {
    _this.addToList(secondarySelect, primarySelect);
  });  
};

function createItemMover() {
  var itemMover = new MoveItem();
  itemMover.bindEvents();
}

var primarySelect = document.getElementById("primaryBox"),
    secondarySelect = document.getElementById("secondaryBox"),
    addBttn = document.getElementById("Add"),
    removeBttn = document.getElementById("Remove");
window.onload = createItemMover();