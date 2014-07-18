function ItemMove() {
  this.primarySelectBox = primarySelect;
  this.secondarySelectBox = secondarySelect;
  this.addButton = addBttn;
  this.removeButton = removeBttn;
  this.Selected = ""; 
}
ItemMove.prototype.addToList = function(fromSelectBox,toSelectBox) {
  this.Selected = fromSelectBox.options[fromSelectBox.selectedIndex];
  if(fromSelectBox.options.length == 0) {
    alert("No Items Present");
  }
  else if(!this.Selected) {
    alert("Please Select an item");
  }
  toSelectBox.appendChild(this.Selected);
  fromSelectBox.removeChild(this.Selected);
};
ItemMove.prototype.bindEvents = function() {
  var _this = this;
  this.addButton.addEventListener("click",function() {
    _this.addToList(_this.primarySelectBox,_this.secondarySelectBox);
  });
  this.removeButton.addEventListener("click",function() {
    _this.addToList(_this.secondarySelectBox,_this.primarySelectBox);
  });  
};
function createItemMover() {
  var itemMover = new ItemMove();
  itemMover.bindEvents();
}
var primarySelect = document.getElementById("primaryBox"),
    secondarySelect = document.getElementById("secondaryBox"),
    addBttn = document.getElementById("Add"),
    removeBttn = document.getElementById("Remove");
window.onload = createItemMover();