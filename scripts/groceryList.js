window.onload = generateList();

function generateList() {
    window.currentItems = ['Bananas', 'Milk', 'Cereal'];
    window.currentPrices = ['.49', '2.49', '3.99'];

    for (var index = 0; index < currentItems.length; index++) {
        addRow(index.toString(), currentItems[index],currentPrices[index]);
    }
}

function addToList(id1, id2) {
    addRow(currentItems.length.toString(), document.getElementById(id1).value, document.getElementById(id2).value);
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