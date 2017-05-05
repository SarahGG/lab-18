window.onload = addElement();

function addElement() {

    window.currentItems = ['Bananas', 'Milk', 'Cereal'];
    window.currentPrices = ['.49', '2.49', '3.99'];

    for (var index = 0; index < currentItems.length; index++) {
        // creating another number
        var newNum = document.createElement('li');
        newNum.className = 'list-item';
        var newNumValue = document.createTextNode(index.toString());
        newNum.appendChild(newNumValue);
        document.getElementById('num-list').appendChild(newNum);

        // creating the new item elements
        var newItem = document.createElement('li');
        newItem.className = 'list-item';
        var newItemName = document.createTextNode(currentItems[index]);
        newItem.appendChild(newItemName);
        document.getElementById('grocery-items').appendChild(newItem);

        // creating the new price elements
        var newPrice = document.createElement('li');
        newPrice.className = 'list-item';
        var newPriceTotal = document.createTextNode(currentPrices[index]);
        newPrice.appendChild(newPriceTotal);
        document.getElementById('grocery-prices').appendChild(newPrice);
    }

// <form>
//     <div class="row section-title skill-subtitle">Enter A New Item</div>
//         <input class="grocery-text" id="groceryPrice" type="text" placeholder="Grocery Price" title="Grocery Price" />
//         <input  class="grocery-button" type="button" value="Add It!" onclick="addItem()" />
//         </form>
}

function addItem() {
    // creating another number
    var nextNum = currentItems.length.toString();
    var newNum = document.createElement('li');
    newNum.className = 'list-item';
    var newNumValue = document.createTextNode(nextNum);
    newNum.appendChild(newNumValue);
    document.getElementById('num-list').appendChild(newNum);

    // creating the new item elements
    var newItem = document.createElement('li');
    newItem.className = 'list-item';
    var newItemName = document.getElementById('groceryItem').value;
    var newItemObject = document.createTextNode(newItemName);
    newItem.appendChild(newItemObject);
    document.getElementById('grocery-items').appendChild(newItem);


    // creating the new price elements
    var newPrice = document.createElement('li');
    newPrice.className = 'list-item';
    var newPriceTotal = document.getElementById('groceryPrice').value;
    var newPriceObject = document.createTextNode(newPriceTotal);
    newPrice.appendChild(newPriceObject);
    document.getElementById('grocery-prices').appendChild(newPrice);
}