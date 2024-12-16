//tellimused
import {Order} from "./order.js";

export class Customer {
    constructor(name){
    this.name = name;
    this.orderHistory = [];
}
 placeOrder(cart) {
    const order = new Order(cart);
    this.orderHistory.push(order);
 }

 printOrderHistory(){
    console.log(`${this.name} tellimuste ajalugu:`);
    this.orderHistory.forEach((order, index) => {
        console.log(
            `Tellimus ${
                index +1
            } \nAeg: ${order.orderDate.toDateString()}, Summa: $${order.cart.calculateTotal()}`
        )
    });
}
}

//const customer = new Customer("Bethany");
//customer.placeOrder(cart);
//customer.printOrderHistory();