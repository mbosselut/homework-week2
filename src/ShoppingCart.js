class ShoppingCart {
    constructor(name) {
        this.name = name;
        this.items = [];
    }
    addItem(itemName, quantity, price) {
        this.items.push({
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        })
        return this.items;
    }
    getItems() {
        return this.items;
    }
    clear(){
        return this.items = [];
    }
    total(){
        return this.items.reduce((totalSum, nextItem) => {
            totalSum += nextItem.quantity * nextItem.pricePerUnit;
            return totalSum;
        }, 0)
    }
}

// const cart = new ShoppingCart('Lidl');
// cart.addItem("item 1", 1, 15.5);
// cart.addItem("item 2", 2, 3);
// cart.addItem("item 3", 10, 2);
// cart.addItem("item 4", 0, 2);
// cart.addItem("item 5", 2, 0);

// console.log(cart);
// cart.clear();
// console.log(cart);
module.exports = ShoppingCart ;