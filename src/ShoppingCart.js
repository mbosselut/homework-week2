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
    clear() {
        return this.items = [];
    }
    total() {
        return this.items.reduce((totalSum, nextItem) => {
            totalSum += nextItem.quantity * nextItem.pricePerUnit;
            return totalSum;
        }, 0)
    }
}

module.exports = ShoppingCart;