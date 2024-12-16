export class Order {
    constructor() {
    this.orderDate = new Date();
    this.cart = cart;
}
printOrder(){
    console.log(`Tellimuse aeg: ${this.orderDate.toDateString()}`);
    this.cart.items.forEach((item) => {
      console.log(
        `${item.product.name} - $${item.product.price} x ${item.quantity}`
      );
    });
    console.log(`Kokku: $${this.cart.calculateTotal()}`);
  }
}