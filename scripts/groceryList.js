window.onload = generateList();

function generateList() {
    window.currentItems = ['Bananas', 'Milk', 'Cereal'];
    window.currentPrices = [.49, 2.49, 3.99];
    window.priceTotal = 0;
    for (var index = 0; index < currentItems.length; index++) {
        addRow((index+ 1).toString(), currentItems[index],currentPrices[index]);
        window.priceTotal += parseFloat(currentPrices[index]);
    }
    addTotal(priceTotal);
}

function addToList(id1, id2) {
    // deletes old total row
    removeLastChild('num-list');
    removeLastChild('grocery-items');
    removeLastChild('grocery-prices');

    var oldTotal = window.priceTotal;
    var addedGrocery = document.getElementById(id1).value;
    var addedPrice = document.getElementById(id2).value;

    addRow((parseFloat(currentItems.length) + 1).toString(), addedGrocery, addedPrice);
    var newTotal = parseFloat(oldTotal) + parseFloat(addedPrice);

    addTotal(newTotal);
}

function removeLastChild(parentElement) {
    parentElement = document.getElementById(parentElement);
    var deletedElement = parentElement.lastElementChild;
    parentElement.removeChild(deletedElement);
}

function addTotal(totalValue) {
    addRow(0, 'Total Cost', totalValue);
}

function addRow (numberValue, groceryValue, priceValue) {
    addListItem(numberValue, 'num-list');
    addListItem(groceryValue, 'grocery-items');
    addListItem(priceValue, 'grocery-prices');
}

function addListItem(groceryContent, groceryContainer) {
    var newLi = document.createElement('li');
    newLi.className = 'list-item';
    var newLiValue = document.createTextNode(groceryContent);
    newLi.appendChild(newLiValue);
    document.getElementById(groceryContainer).appendChild(newLi);
}